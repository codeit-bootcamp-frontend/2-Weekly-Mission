import { NextApiRequest, NextApiResponse } from "next";
import { folderServices } from "../address";
import { ServiceResponse, service } from "../instance";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  const folderId = id as string;

  const token = req.headers.cookie;
  try {
    if (req.method === "GET") {
      const { data }: ServiceResponse<any> = await service(req.method, folderServices.selectedFolder(folderId), token);
      return res.json({
        ok: true,
        folders: data,
      });
    } else if (req.method === "PUT") {
      await service(req.method, folderServices.selectedFolder(folderId), token, req.body);
      return res.json({
        ok: true,
      });
    } else if (req.method === "DELETE") {
      await service(req.method, folderServices.selectedFolder(folderId), token);
      return res.json({
        ok: true,
      });
    } else {
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
    }
  } catch (e) {
    console.error("API 요청 중 오류 발생:", e);
    return res.status(500).json({ ok: false, error: "서버 오류" });
  }
}

export default handler;
