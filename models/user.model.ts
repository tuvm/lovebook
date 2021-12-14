export default interface User {
  id?: string | null;
  username: string;
  password: string;
  avatar: string;
  created_at: number;
  updated_at: number;
}
