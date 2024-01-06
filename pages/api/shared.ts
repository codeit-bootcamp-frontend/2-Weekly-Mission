import { NextApiRequest, NextApiResponse } from "next";
import { END_POINT } from "@/lib/constents";

async function hanlder(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = await fetch(`${END_POINT}/sample/folder`).then((res) => res.json());
  return res.json({
    ok: true,
    folder,
  });
}

export default hanlder;
