import { NextApiRequest, NextApiResponse } from "next";
import { folderServices } from "../address";
import { instance, setAuthToken } from "../instance";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  const folderId = id as string;

  const token = req.headers.authorization;
  setAuthToken(token);
  try {
    const { data: response } = await instance.get(folderServices.getSelectedFolder(folderId));
    return res.json({
      ok: true,
      folders: response.data,
    });
  } catch (e) {
    console.error("API 요청 중 오류 발생:", e);
    return res.status(500).json({ ok: false, error: "서버 오류" });
  }
}

export default handler;
