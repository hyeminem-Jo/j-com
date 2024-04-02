import NavMenu from '@/app/(loggedIn)/_component/NavMenu/NavMenu'
import ProfileButton from '@/app/(loggedIn)/_component/ProfileButton/ProfileButton'
import FollowerRecommend from '@/app/(loggedIn)/_component/FollowerRecommend/FollowerRecommend'
import { ReactNode } from 'react'
import MoreMenu from '@/app/(loggedIn)/_component/MoreMenu/MoreMenu'
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
          </div>
        </section>
      </header>
      <div className={style.rightWrapper}>
        <main className={style.main}>{children}</main>
      </div>
    </div>
  )
}
