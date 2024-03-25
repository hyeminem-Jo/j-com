'use client'

import { useEffect, useRef, useState } from 'react'
import menuStyle from '@/app/(loggedIn)/_component/navMenu.module.scss'
import Link from 'next/link'
import { useMenuStore } from '@/store/moreMenu'
import style from './moreMenu.module.scss'

function MoreMenu() {
  // const [isOpen, setIsOpened] = useState<boolean>(false)
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
            <Link href="#" className={style.moreMenuItem}>
              <svg
                aria-label="설정"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="18"
                role="img"
                viewBox="0 0 24 24"
                width="18"
              >
                <title>설정</title>
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="8.635"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></circle>
                <path
                  d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              <span>설정</span>
            </Link>
          </li>
          <li onClick={() => setIsOpened(false)}>
            <Link href="/h._jinny/saved" className={style.moreMenuItem}>
              <svg
                aria-label="저장됨"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="18"
                role="img"
                viewBox="0 0 24 24"
                width="18"
              >
                <title>저장됨</title>
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polygon>
              </svg>
              <span>저장됨</span>
            </Link>
          </li>
          <li>
            <button type="button" className={style.moreMenuItem}>
              <svg
                aria-label="테마 아이콘"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="18"
                role="img"
                viewBox="0 0 24 24"
                width="18"
              >
                <title>테마 아이콘</title>
                <path d="M12.00018,4.5a1,1,0,0,0,1-1V2a1,1,0,0,0-2,0V3.5A1.00005,1.00005,0,0,0,12.00018,4.5ZM5.28241,6.69678A.99989.99989,0,1,0,6.69647,5.28271l-1.06054-1.061A.99989.99989,0,0,0,4.22186,5.63574ZM4.50018,12a1,1,0,0,0-1-1h-1.5a1,1,0,0,0,0,2h1.5A1,1,0,0,0,4.50018,12Zm.78223,5.30322-1.06055,1.061a.99989.99989,0,1,0,1.41407,1.41406l1.06054-1.061a.99989.99989,0,0,0-1.41406-1.41407ZM12.00018,19.5a1.00005,1.00005,0,0,0-1,1V22a1,1,0,0,0,2,0V20.5A1,1,0,0,0,12.00018,19.5Zm6.71729-2.19678a.99989.99989,0,0,0-1.41406,1.41407l1.06054,1.061A.99989.99989,0,0,0,19.778,18.36426ZM22.00018,11h-1.5a1,1,0,0,0,0,2h1.5a1,1,0,0,0,0-2ZM18.01044,6.98975a.996.996,0,0,0,.707-.293l1.06055-1.061A.99989.99989,0,0,0,18.364,4.22168l-1.06054,1.061a1,1,0,0,0,.707,1.707ZM12.00018,6a6,6,0,1,0,6,6A6.00657,6.00657,0,0,0,12.00018,6Zm0,10a4,4,0,1,1,4-4A4.00458,4.00458,0,0,1,12.00018,16Z"></path>
              </svg>
              <span>모드 전환</span>
            </button>
          </li>
          <li>
            <button type="button" className={style.moreMenuItem}>
              <svg
                aria-label="문제 신고"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="18"
                role="img"
                viewBox="0 0 24 24"
                width="18"
              >
                <title>문제 신고</title>
                <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path>
              </svg>
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
