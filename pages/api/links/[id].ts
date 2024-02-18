import { NextApiRequest, NextApiResponse } from "next";
import { folderServices } from "../address";
import { service } from "../instance";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  const folderId = id as string;

  const token = req.headers.cookie;
  try {
    if (req.method === "GET") {
      const { data: links } = await service(req.method, folderServices.getSelectedFolderLinks(folderId), token);
      return res.json({
        ok: true,
        links,
      });
    } else if (req.method === "POST") {
      const form = {
        ...req.body,
        folderId,
      };
      await service(req.method, folderServices.links, token, form);
      return res.json({
        ok: true,
      });
    } else if (req.method === "DELETE") {
      await service(req.method, folderServices.selectedLinks(folderId), token);
      return res.json({
        ok: true,
      });
    }
  } catch (e) {
    console.error(e);
  }
}

export default handler;
