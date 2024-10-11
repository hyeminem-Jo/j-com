'use client'

import Post from '@/app/(loggedIn)/_component/Post/Post'
import {useQuery} from "@tanstack/react-query";
import {getFollowingPosts} from "@/app/(loggedIn)/home/_lib/getFollowingPosts";
import {Post as IPost} from "@/model/Post";

function FollowingRecentPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })
  console.log('data', data)
  return (
    <>
      {/* 팔로우 한것 중 최근 게시물 */}
      {data?.map((post, index) => {
        return <Post key={post.postId} post={post} postIndex={index} />
      })}
    </>
  )
}

export default FollowingRecentPosts
