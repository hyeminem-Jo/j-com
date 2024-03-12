import FollowedRecentPosts from '@/app/(loggedIn)/_component/followedRecentPosts'
import RecommendedPosts from '@/app/(loggedIn)/_component/RecommendedPosts'
import Link from 'next/link'
import Image from 'next/image'
import linkStyle from '@/app/_component/common/button.module.scss'
import style from './home.module.scss'
import checkAllPost from '../../../../public/check-all-post-icon.png'

function HomePage() {
  return (
    <main className={style.main}>
      <div className={style.mainInner}>
        {/* 팔로우한 최근 게시물 (최근 3일 동안 새롭게 올라온 게시물) */}
        <FollowedRecentPosts />
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
    </main>
  )
}

export default HomePage
