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
        <main className={style.main}>{children}</main>
      </div>
    </div>
  )
}
