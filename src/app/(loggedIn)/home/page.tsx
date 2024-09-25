import FollowedRecentPosts from '@/app/(loggedIn)/_component/followedRecentPosts'
import RecommendedPosts from '@/app/(loggedIn)/_component/RecommendedPosts'
import StoryTab from '@/app/(loggedIn)/_component/StoryTab/StoryTab'
import style from './home.module.scss'
import MainProfileList from "@/app/(loggedIn)/_component/MainProfileList/MainProfileList";
import CheckedAllFollowedRecentPost
  from "@/app/(loggedIn)/_component/CheckedAllFollowedRecentPost/CheckedAllFollowedRecentPost";

function HomePage() {
  return (
    <div className={style.mainSection}>
      <section className={style.leftSection}>
        <StoryTab />
        <div className={style.postArea}>
          {/* 팔로우한 최근 게시물 (최근 3일 동안 새롭게 올라온 게시물) */}
          <FollowedRecentPosts />
          {/* 팔로우한 최근 게시물 모두 확인함 표시 */}
          <CheckedAllFollowedRecentPost />
          {/* 추천 게시물 나열 시작 */}
          <RecommendedPosts />
        </div>
      </section>
      <section className={style.rightSection}>
        <MainProfileList/>
      </section>
    </div>
  )
}

export default HomePage
