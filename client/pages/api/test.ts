import type { NextApiRequest, NextApiResponse } from 'next'
import { getUsers } from '../../model/user'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let data = await getUsers(true)
  res.status(200).send(data);
}