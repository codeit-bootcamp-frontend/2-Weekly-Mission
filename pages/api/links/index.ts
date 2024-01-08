import { NextApiRequest, NextApiResponse } from "next";
import { END_POINT } from "@/lib/constents";
import { LinkData } from "@/types/folder.type";
import { Links } from "@/types/global.type";
import dbConnect from "@/db/dbConnect";
import mongoose from "mongoose";
import FolderModel from "@/db/models/FolderModel";

async function hanlder(req: NextApiRequest, res: NextApiResponse) {
  let url = `${END_POINT}/users/${1}/links`;

  await dbConnect();
  console.log(mongoose.connection.readyState);
  console.log(FolderModel);

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
