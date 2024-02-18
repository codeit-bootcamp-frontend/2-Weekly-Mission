import { NextApiRequest, NextApiResponse } from "next";
import { folderServices } from "../address";
import { service } from "../instance";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.cookie;
  try {
    const response = await service("GET", folderServices.links, token);
    return res.json({
      ok: true,
      links: response.data,
    });
  } catch (e) {
    console.error(e);
  }
}

export default handler;
