import { NextApiRequest, NextApiResponse } from "next";
import { apiClient, setAuthToken } from "../instance";
import { folderServices } from "../address";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization;
  setAuthToken(token);
  try {
    const { data: response } = await apiClient.get(folderServices.getFolder);
    const { folder } = response.data;
    return res.json({
      ok: true,
      folder,
    });
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    return res.status(500).json({ ok: false, error: "서버 오류" });
  }
}

export default handler;
