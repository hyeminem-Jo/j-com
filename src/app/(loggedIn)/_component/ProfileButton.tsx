'use client'

import { TextButton } from '@/app/_component/common/Button'
import Image from 'next/image'
import style from './profileButton.module.scss'
import userImage from '../../../../public/user.jpg'

function ProfileButton({ user, isMe }) {
  // const me = {
  //   // 임시로 내 정보 있는것처럼
  //   id: 'h._jinny',
  //   nickname: '혜진',
  //   image: '/profile_image.jpg',
  // }

  const onLogout = () => {}

  return (
    <div className={style.profileButton}>
      <button type="button" className={style.profileButtonInner}>
        <div className={style.profileImage}>
          <Image
            src={user.image}
            width={50}
            height={50}
            alt={`${user.id}-profile-image`}
          />
        </div>
        <div className={style.userName}>
          <span className={style.userId}>{user.id}</span>
          <span className={style.userNickname}>{user.nickname}</span>
        </div>
      </button>
      {isMe ? (
        <TextButton onClick={onLogout}>전환</TextButton>
      ) : (
        <TextButton onClick={onLogout}>팔로우</TextButton>
      )}
    </div>
  )
}

export default ProfileButton
