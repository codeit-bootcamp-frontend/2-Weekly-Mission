import { NextApiRequest, NextApiResponse } from "next";
import { userServices } from "../address";

async function hanlder(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;
  const userid = id as string;
  const { data: users } = await fetch(userServices.getUserProfile(userid))
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
