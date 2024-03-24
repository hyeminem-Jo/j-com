import NavMenu from '@/app/(loggedIn)/_component/NavMenu'
import Link from 'next/link'
import Image from 'next/image'
import ProfileButton from '@/app/(loggedIn)/_component/ProfileButton'
import FollowerRecommend from '@/app/(loggedIn)/_component/FollowerRecommend'
import { ReactNode } from 'react'
import MoreMenu from '@/app/(loggedIn)/_component/MoreMenu'
import style from './layout.module.scss'

type Props = { children: ReactNode; modal: ReactNode }

export default function LoggedInLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      {modal}
      <header className={style.leftWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftFixed}>
            <NavMenu />
            <MoreMenu />
          </div>
        </section>
      </header>
      <div className={style.rightWrapper}>
        <main className={style.main}>{children}</main>
      </div>
    </div>
  )
}
