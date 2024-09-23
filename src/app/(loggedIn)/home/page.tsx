import FollowedRecentPosts from '@/app/(loggedIn)/_component/followedRecentPosts'
import RecommendedPosts from '@/app/(loggedIn)/_component/RecommendedPosts'
import Link from 'next/link'
import Image from 'next/image'
import linkStyle from '@/app/_component/common/Button/button.module.scss'
import StoryTab from '@/app/(loggedIn)/_component/StoryTab/StoryTab'
import ProfileButton from '@/app/(loggedIn)/_component/ProfileButton/ProfileButton'
import FollowerRecommend from '@/app/(loggedIn)/_component/FollowerRecommend/FollowerRecommend'
import style from './home.module.scss'
import checkAllPost from '../../../../public/check-all-post-icon.png'
import MainProfileList from "@/app/(loggedIn)/_component/MainProfileList/MainProfileList";

function HomePage() {
  return (
    <div className={style.mainSection}>
      <section className={style.leftSection}>
        <StoryTab />
        <div className={style.postArea}>
          {/* 팔로우한 최근 게시물 (최근 3일 동안 새롭게 올라온 게시물) */}
          <FollowedRecentPosts />
          {/* 최근 게시물 모두 확인 표시 */}
          <div className={style.checkAllPosts}>
            <div className={style.checkImage}>
              <Image src={checkAllPost} width={96} height={96} alt="logo" />
            </div>
            <strong>모두 확인했습니다</strong>
            <span>최근 3일 동안 새롭게 올라온 게시물을 모두 확인했습니다.</span>
            <Link href="/past-posts" className={linkStyle.textButton}>
              이전 게시물 보기
            </Link>
          </div>
          {/* 추천 게시물 */}
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
