import { ReactNode } from 'react'
import style from '@/app/(loggedOut)/_component/main.module.scss'
import SignupModal from '@/app/(loggedIn)/_component/Modals/SignupModal'

type Props = { children: ReactNode }
export default function LoggedOutLayout({ children }: Props) {
  return (
    <div className={style.container}>
      {children}
      <SignupModal />
    </div>
  )
}
