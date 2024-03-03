import FollowedRecentPosts from '@/app/(loggedIn)/_component/followedRecentPosts'
import RecommendedPosts from '@/app/(loggedIn)/_component/RecommendedPosts'

function Main() {
  return (
    <div>
      <FollowedRecentPosts />
      <RecommendedPosts />
    </div>
  )
}

export default Main
