import ProfileButton from '@/app/(loggedIn)/_component/ProfileButton'
import style from './followerRecommend.module.scss'

function FollowerRecommend({ isMyProfile }) {
  return (
    <div className={style.followerRecommend}>
      <div className={style.followerRecommendInner}>
        <strong className={style.title}>회원님을 위한 추천</strong>
        <a href="/explore/people" className={style.viewAll}>
          모두 보기
        </a>
      </div>
      {[0, 0, 0, 0, 0].map(() => (
        <ProfileButton isMyProfile={isMyProfile} />
      ))}
    </div>
  )
}

export default FollowerRecommend
