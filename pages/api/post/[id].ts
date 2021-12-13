import { NextApiRequest, NextApiResponse } from "next";
import { METHODS } from "../../../constants/method";
import { Post } from "../posts";

export default function postHandler(req: NextApiRequest, res: NextApiResponse<Post>) {
  const {
    query: { id, name },
    method,
  } = req

  switch (method) {
    case METHODS.GET:
      // Get data from your database
      res.status(200).json({ username: 'tuvm', avatar: '', image: '', like: 1213, caption: 'this is caption', created_at: 241234154, comments: [] })
      break
    case METHODS.PUT:
      // Update or create data in your database
      res.status(200).json({ username: 'tuvm', avatar: '', image: '', like: 1213, caption: 'this is caption', created_at: 241234154, comments: [] })
      break
    default:
      res.setHeader('Allow', [METHODS.GET, METHODS.PUT])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
