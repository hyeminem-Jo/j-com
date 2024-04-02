import ProfileButton from '@/app/(loggedIn)/_component/ProfileButton/ProfileButton'
import style from './followerRecommend.module.scss'

function FollowerRecommend({ users }) {
  return (
    <div className={style.followerRecommend}>
      <div className={style.followerRecommendInner}>
        <strong className={style.title}>회원님을 위한 추천</strong>
        <a href="/explore/people" className={style.viewAll}>
          모두 보기
        </a>
      </div>
      {users?.map((user) => <ProfileButton user={user} ring={false} />)}
    </div>
  )
}

export default FollowerRecommend
