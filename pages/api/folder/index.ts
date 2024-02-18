import { NextApiRequest, NextApiResponse } from "next";
import { service } from "../instance";
import { END_POINT } from "@/lib/constents";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.cookie;
  try {
    if (req.method === "GET") {
      const response = await service("GET", `${END_POINT}/folders`, token);
      return res.json({
        ok: true,
        folder: response.data,
      });
    } else if (req.method === "POST") {
      const response = await service("POST", `${END_POINT}/folders`, token, req.body);
      return res.json({
        ok: true,
        data: response.data,
      });
    }
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    return res.status(500).json({ ok: false, error: "서버 오류" });
  }
}

export default handler;
