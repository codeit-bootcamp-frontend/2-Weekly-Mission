import { NextApiRequest, NextApiResponse } from "next";
import { userServices } from "../address";
import { ServiceResponse, service } from "../instance";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.cookie;
  try {
    if (req.method === "GET") {
      const { data, errorMessage }: ServiceResponse<any> = await service(req.method, userServices.users, token);
      if (!errorMessage) {
        return res.json(data);
      }
      return res.status(400).json({ ok: false, errorMessage });
    } else res.setHeader("Allow", ["GET"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    return res.status(500).json({ ok: false, error: "서버 오류" });
  }
}

export default handler;
