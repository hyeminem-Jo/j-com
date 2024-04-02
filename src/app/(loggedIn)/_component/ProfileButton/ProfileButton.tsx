'use client'

import { TextButton } from '@/app/_component/common/Button/Button'
import Link from 'next/link'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import style from './profileButton.module.scss'

function ProfileButton({ user, isMe, ring }) {
  const onLogout = () => {}

  return (
    <div className={style.profileButton}>
      <Link href="src/app/(loggedIn)/_component#" className={style.profileLink}>
        <CircleProfile
          src={user?.image}
          width={50}
          height={50}
          alt={user?.id}
          ring={isMe || ring}
        />
        <div className={style.userName}>
          <span className={style.userId}>{user?.id}</span>
          <span className={style.userNickname}>{user?.nickname}</span>
        </div>
      </Link>
      {isMe ? (
        <TextButton onClick={onLogout}>전환</TextButton>
      ) : (
        <TextButton onClick={onLogout}>팔로우</TextButton>
      )}
    </div>
  )
}

export default ProfileButton
