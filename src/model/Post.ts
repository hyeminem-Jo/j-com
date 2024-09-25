import { User } from "./User";
import {PostImage} from "@/model/PostImage";
import {Comment} from "@/model/Comment";

export interface Post {
  postId: number;
  User: User;
  content: string;
  createdAt: Date;
  Images: PostImage[];
  Comment: Comment[];
}