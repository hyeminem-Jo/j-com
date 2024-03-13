import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profileButtonStyle from './profileButton.module.scss'
import style from './storyTab.module.scss'

function StoryTab() {
  const users = [
    // 내가 팔로우한 유저들
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
    <div className={style.storyTab}>
      {/* TODO: react-slick 으로 만들기 */}
      <ul className={style.storyTabList}>
        {users.map((user) => (
          <li className={style.storyTabListItem} key={user.id}>
            <Link href="#" className={style.profileImage}>
              <Image
                src={user.image}
                width={60}
                height={60}
                alt={`${user.id}-profile-image`}
              />
            </Link>
            <div className={style.userName}>{user.id}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default StoryTab
