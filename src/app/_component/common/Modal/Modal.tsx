'use client'

import IcClose from '@/app/(loggedIn)/_component/svg/IcClose'
import { useModalStore } from '@/store/modal'
import { useEffect } from 'react'
import cx from 'classnames'
import style from './modal.module.scss'

function Modal({
  children,
  title,
  modalName,
  header = true,
  autoHeight = false,
}) {
  const modalList = useModalStore((state: any) => state.modalList)
  const closeModal = useModalStore((state: any) => state.closeModal)
  const isOpen = modalList?.includes(modalName)

  const onClickClose = () => {
    closeModal(modalName)
  }

  useEffect(() => {
    console.log(modalList)
  }, [modalList])

  return (
    <>
      {isOpen && (
        <div className={style.modalWrap}>
          {/* {modalList} */}
          <div className={cx(style.modal, autoHeight && style.autoHeight)}>
            {header && (
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
            )}
            <div className={style.modalContent}>{children}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
