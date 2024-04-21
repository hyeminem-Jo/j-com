import NavMenu from '@/app/(loggedIn)/_component/NavMenu/NavMenu'
import { ReactNode } from 'react'
import PostOptionModal from '@/app/(loggedIn)/_component/Modals/PostOptionModal'
import PostDetailModal from '@/app/(loggedIn)/_component/Modals/PostDetailModal'
import style from './layout.module.scss'

type Props = { children: ReactNode; modal: ReactNode }

export default function LoggedInLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      {modal}
      {/* 모달 */}
      <PostOptionModal />
      <PostDetailModal />
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
