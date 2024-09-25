import { User } from "./User";

export interface Comment {
  commentId: number;
  User: User;
  content: string;
  createdAt: Date;
}