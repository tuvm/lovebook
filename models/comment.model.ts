export default interface Comment {
  id?: string | null;
  content: string;
  postId: string;
  username: string;
  createdAt: number;
  updatedAt: number;
}
