import { NextApiRequest, NextApiResponse } from "next";
import { folderServices } from "../address";

async function hanlder(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  const userId = id as string;

  const { data: folder } = await fetch(folderServices.getAllFolder(userId))
    .then((res) => res.json())
    .catch((e) => {
      throw Error(`잘못된 요청 ${e}`);
    });
  return res.json({
    ok: true,
    folder,
  });
}

export default hanlder;
