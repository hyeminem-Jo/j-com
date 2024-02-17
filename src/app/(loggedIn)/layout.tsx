import NavMenu from '@/app/(loggedIn)/_component/NavMenu'
import Link from 'next/link'
import Image from 'next/image'
import style from './layout.module.scss'
import logo from '../../../public/logo.png'

export default function AfterLoginLayout({ children }) {
  return (
    <div className={style.container}>
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
            친구들있는 오른쪽 섹션
          </section>
        </div>
      </div>
    </div>
  )
}
