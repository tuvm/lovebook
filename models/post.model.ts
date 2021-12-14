import Comment from './comment.model';
import User from './user.model';

export default interface Post {
  uid?: string | undefined;
  caption: string;
  image: string;
  user?: User;
  comments?: Comment[];
  createdAt: number;
  updatedAt: number;
}
