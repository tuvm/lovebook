// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Comment = {
  username: string,
  content: string,
  created_at: number,
}

export type Post = {
  username: string,
  avatar: string,
  image: string,
  like: number,
  caption: string,
  created_at: number,
  comments: Comment[],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json([{ username: 'tuvm', avatar: '', image: '', like: 1213, caption: 'this is caption', created_at: 241234154, comments: [] }])
}
