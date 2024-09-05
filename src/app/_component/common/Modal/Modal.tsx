'use client'

import IcClose from '@/app/(loggedIn)/_component/svg/IcClose'
import { useModalStore } from '@/store/modal'
import {useEffect, useRef} from 'react'
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
  const modalRef = useRef<HTMLDivElement | null>(null)

  const onClickClose = () => {
    closeModal(modalName)
  }

  useEffect(() => {
    console.log(modalList)
  }, [modalList])

  useEffect(() => {
    const handleOutsideClose = (e: MouseEvent): void => {
      if (isOpen && !modalRef.current?.contains(e.target as Node)) {
        closeModal(modalName);
      }
    };
    // 'click' 대신 'mousedown' 로 대체: (PostForm 에서 이미지 업로드 버튼의 click 이벤트가 모달 바깥을 클릭한 것으로 인식되어 모달이 닫힘)
    document.addEventListener('mousedown', handleOutsideClose);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClose);
    };
  }, [isOpen, closeModal, modalName]);

  return (
    <>
      {isOpen && (
        <div className={style.modalWrap}>
          {/* {modalList} */}
          <div ref={modalRef} className={cx(style.modal, autoHeight && style.autoHeight)}>
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
