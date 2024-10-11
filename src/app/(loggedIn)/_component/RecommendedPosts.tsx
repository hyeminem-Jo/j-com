'use client'

import Post from '@/app/(loggedIn)/_component/Post/Post'
import {useQuery} from "@tanstack/react-query";
import {getPostRecommends} from "@/app/(loggedIn)/home/_lib/getPostRecommends";
import { Post as IPost } from '@/model/Post';

function RecommendedPosts() {
  const style = {
    paddingTop: '20px',
    borderTop: '1px solid #ccc',
  }
  const fontStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '15px',
  }

  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })

  return (
    <div style={style}>
      <h4 style={fontStyle}>추천 게시물</h4>
      {data?.map((post) => {
        return <Post key={post.postId} post={post} />
      })}
    </div>
  )
}

export default RecommendedPosts
