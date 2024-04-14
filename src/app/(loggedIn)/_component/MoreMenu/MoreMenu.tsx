'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useMenuStore } from '@/store/moreMenu'
import IcSetting from '@/app/(loggedIn)/_component/svg/IcSetting'
import IcSaved from '@/app/(loggedIn)/_component/svg/IcSaved'
import IcThema from '@/app/(loggedIn)/_component/svg/IcThema'
import IcReport from '@/app/(loggedIn)/_component/svg/IcReport'
import style from './moreMenu.module.scss'

function MoreMenu() {
  const isOpen = useMenuStore((state: any) => state.isMoreMenuOpen)
  const setIsOpened = useMenuStore((state: any) => state.setIsMoreMenuOpen)
  const dialogRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    // MouseEvent 타입 매개변수를 받고, 아무것도 반환하지 않는 함수
    const handleOutsideClose = (e: MouseEvent): void => {
      // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
      if (isOpen && !dialogRef.current.contains(e.target as Node))
        setIsOpened(false)
    }
    document.addEventListener('click', handleOutsideClose)

    return () => document.removeEventListener('click', handleOutsideClose)
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <ul role="dialog" ref={dialogRef} className={style.moreMenu}>
          <li onClick={() => setIsOpened(false)}>
            <Link
              href="src/app/(loggedIn)/_component#"
              className={style.moreMenuItem}
            >
              <IcSetting size={18} />
              <span>설정</span>
            </Link>
          </li>
          <li onClick={() => setIsOpened(false)}>
            <Link href="/h._jinny/saved" className={style.moreMenuItem}>
              <IcSaved size={18} />
              <span>저장됨</span>
            </Link>
          </li>
          <li>
            <button type="button" className={style.moreMenuItem}>
              <IcThema size={18} />
              <span>모드 전환</span>
            </button>
          </li>
          <li>
            <button type="button" className={style.moreMenuItem}>
              <IcReport size={18} />
              <span>문제 신고</span>
            </button>
          </li>
          <hr />
          <li>
            <button type="button" className={style.moreMenuItem}>
              <span>로그아웃</span>
            </button>
          </li>
        </ul>
      )}
    </>
  )
}

export default MoreMenu
