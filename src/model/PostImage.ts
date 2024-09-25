import { Post } from "./Post"

export interface PostImage {
  src: string,
  alt: string,
  imageId: number,
  Post?: Post
}