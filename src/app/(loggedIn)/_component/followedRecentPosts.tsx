import Post from '@/app/(loggedIn)/_component/Post'

function FollowedRecentPosts() {
  return (
    <div style={{ width: '470px' }}>
      {/* 팔로우 한것 중 최근 게시물 */}
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default FollowedRecentPosts
