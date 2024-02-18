import { NextApiRequest, NextApiResponse } from "next";
import { ServiceResponse, service } from "../instance";
import { authServices } from "../address";
import { serialize } from "cookie";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const { data, errorMessage }: ServiceResponse<any> = await service(
        req.method,
        authServices.signIn,
        undefined,
        req.body
      );
      if (!errorMessage) {
        const { accessToken } = data;
        res.setHeader(
          "Set-Cookie",
          serialize("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 1 week
          })
        );
        return res.json({ ok: true });
      }
      return res.status(400).json({ ok: false, errorMessage });
    } else {
      res.setHeader("Allow", ["POST"]);
    }
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    return res.status(500).json({ ok: false, error: "서버 오류" });
  }
}

export default handler;
