import NavMenu from '@/app/(loggedIn)/_component/NavMenu'
import Link from 'next/link'
import Image from 'next/image'
import ProfileButton from '@/app/(loggedIn)/_component/ProfileButton'
import FollowerRecommend from '@/app/(loggedIn)/_component/FollowerRecommend'
import { ReactNode } from 'react'
import style from './layout.module.scss'
import logo from '../../../public/logo.png'

type Props = { children: ReactNode; modal: ReactNode }

export default function LoggedInLayout({ children, modal }: Props) {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: 'h._jinny',
    nickname: '혜진',
    image: '/profile_image.jpg',
  }

  const users = [ // 팔로우 추천 유저들
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
    <div className={style.container}>
      {modal}
      <header className={style.leftWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftFixed}>
            <Link href="/">
              <Image src={logo} width={110} alt="logo" />
            </Link>
            <NavMenu />
          </div>
        </section>
      </header>
      <div className={style.rightWrapper}>
        <div className={style.rightWrapperInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <ProfileButton user={me} isMe />
            <FollowerRecommend users={users} />
          </section>
        </div>
      </div>
    </div>
  )
}
