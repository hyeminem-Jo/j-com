import FollowedRecentPosts from '@/app/(loggedIn)/_component/followedRecentPosts'
import RecommendedPosts from '@/app/(loggedIn)/_component/RecommendedPosts'
import Link from 'next/link'
import Image from 'next/image'
import linkStyle from '@/app/_component/common/Button/button.module.scss'
import StoryTab from '@/app/(loggedIn)/_component/StoryTab/StoryTab'
import ProfileButton from '@/app/(loggedIn)/_component/ProfileButton/ProfileButton'
import FollowerRecommend from '@/app/(loggedIn)/_component/FollowerRecommend/FollowerRecommend'
import PostDetailModal from '@/app/(loggedIn)/_component/Modals/PostDetailModal'
import PostOptionModal from '@/app/(loggedIn)/_component/Modals/PostOptionModal'
import style from './home.module.scss'
import checkAllPost from '../../../../public/check-all-post-icon.png'

function HomePage() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: 'h._jinny',
    nickname: '혜진',
    image: '/profile_image.jpg',
  }
  const users = [
    // 팔로우 추천 유저들
    {
      id: 'h._seung',
      nickname: '랍뷰희승',
      image: '/user.jpg',
    },
    {
      id: 'veenoo',
      nickname: '조수빈',
      image: '/user.jpg',
    },
    {
      id: 'jin_woo',
      nickname: '김김진진우우',
      image: '/user.jpg',
    },
    {
      id: 'hyun_mori',
      nickname: '이현지',
      image: '/user.jpg',
    },
    {
      id: 'lovely_joo',
      nickname: '곽이주',
      image: '/user.jpg',
    },
  ]

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
          {/* 모달 */}
          <PostOptionModal />
          <PostDetailModal />
        </div>
      </section>
      <section className={style.rightSection}>
        <ProfileButton user={me} isMe />
        <FollowerRecommend users={users} />
      </section>
    </div>
  )
}

export default HomePage
