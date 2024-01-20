import { NextApiRequest, NextApiResponse } from "next";
import { userServices } from "../address";
import { instance, setAuthToken } from "../instance";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization;
  setAuthToken(token);
  try {
    const { data: users } = await instance.get(userServices.getProfile);
    const user = users.data[0];

    return res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    return res.status(500).json({ ok: false, error: "서버 오류" });
  }
}

export default handler;
