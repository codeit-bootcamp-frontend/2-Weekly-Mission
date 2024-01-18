import { NextApiRequest, NextApiResponse } from "next";
import { sharedServices } from "../address";

async function hanlder(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = await fetch(sharedServices.getShareds).then((res) => res.json());
  return res.json({
    ok: true,
    folder,
  });
}

export default hanlder;
