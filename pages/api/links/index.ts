import { NextApiRequest, NextApiResponse } from "next";
import { folderServices } from "../address";
import { LinkData } from "@/types/contents.type";
import { Links } from "@/types/global.type";
import { instance, setAuthToken } from "../instance";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization;
  setAuthToken(token);
  try {
    const { data: response } = await instance.get(folderServices.getLinks);
    const { folder } = response.data;

    const convertLinks: Links[] = folder.map((link: LinkData) => ({
      id: link.id,
      updatedAt: link.update_at,
      description: link.description,
      url: link.url,
      title: link.title,
      folderId: link.folder_id,
      imageSource: link.image_source,
      createdAt: link.created_at,
    }));

    return res.json({
      ok: true,
      links: convertLinks,
    });
  } catch (e) {
    console.error(e);
  }
}

export default handler;
