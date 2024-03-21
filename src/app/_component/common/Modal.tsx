'use client'

import {useRouter } from 'next/navigation'
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
            <svg
              width={24}
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
            >
              <g>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z" />
              </g>
            </svg>
          </button>
        </div>
        <div className={style.modalContent}>{children}</div>
      </div>
    </>
  )
}

export default Modal
