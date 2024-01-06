import { NextApiRequest, NextApiResponse } from "next";
import { END_POINT } from "@/lib/constents";

async function hanlder(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;
  const { data: users } = await fetch(`${END_POINT}/users/${id}`)
    .then((res) => res.json())
    .catch((e) => {
      throw Error(`잘못된 요청 ${e}`);
    });
  return res.json({
    ok: true,
    users,
  });
}

export default hanlder;
