'use client'

import { useRouter } from 'next/navigation'
import IcClose from '@/app/(loggedIn)/_component/svg/IcClose'
import style from './modal.module.scss'

function Modal({ children, title }) {
  const router = useRouter()

  const onClickClose = () => {
    if (window.history.length === 2) {
      router.push('home') // write 페이지를 url 로 접근 후 닫힘 버튼을 누르면 home 으로 이동
    } else {
      router.back()
    }
  }

  return (
    <>
      <div className={style.modalBg} onClick={onClickClose}></div>
      <div className={style.modal}>
        <div className={style.modalHeader}>
          {title}
          <button
            type="button"
            className={style.closeBtn}
            onClick={onClickClose}
          >
            <IcClose />
          </button>
        </div>
        <div className={style.modalContent}>{children}</div>
      </div>
    </>
  )
}

export default Modal
