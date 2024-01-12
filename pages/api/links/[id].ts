import { NextApiRequest, NextApiResponse } from "next";
import { folderServices } from "../address";
import { LinkData } from "@/types/folder.type";
import { Links } from "@/types/global.type";

async function hanlder(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  const userId = id as string;

  const url = userId ? folderServices.getUserLinks("1", userId) : folderServices.getUserLinks("1");

  const { data: links } = await fetch(url)
    .then((res) => res.json())
    .catch((e) => {
      throw Error(`잘못된 요청 ${e}`);
    });
  const convertLinks: Links[] = links.map((link: LinkData) => ({
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
}

export default hanlder;
