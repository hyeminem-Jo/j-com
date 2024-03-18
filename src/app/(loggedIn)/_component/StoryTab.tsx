import React from 'react'
import Link from 'next/link'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import style from './storyTab.module.scss'

function StoryTab() {
  const users = [
    // 내가 팔로우한 유저들
    {
      id: 'h._seung',
      nickname: '랍뷰희승',
      image: '/user.jpg',
      updatedStory: true,
    },
    {
      id: 'veenoo',
      nickname: '조수빈',
      image: '/user.jpg',
      updatedStory: true,
    },
    {
      id: 'jin_woo',
      nickname: '김김진진우우',
      image: '/user.jpg',
      updatedStory: false,
    },
    {
      id: 'hyun_mori',
      nickname: '이현지',
      image: '/user.jpg',
      updatedStory: false,
    },
    {
      id: 'lovely_joo',
      nickname: '곽이주',
      image: '/user.jpg',
      updatedStory: false,
    },
  ]
  return (
    <div className={style.storyTab}>
      {/* TODO: react-slick 으로 만들기 */}
      <ul className={style.storyTabList}>
        {users.map((user) => (
          <li className={style.storyTabListItem} key={user.id}>
            <Link href="#" className={style.profileImageLink}>
              <CircleProfile
                src={user?.image}
                width={60}
                height={60}
                alt={user?.id}
                ring
                active={user?.updatedStory}
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
