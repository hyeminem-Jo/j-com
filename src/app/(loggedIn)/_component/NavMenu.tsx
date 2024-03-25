'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useEffect, useState } from 'react'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import NavMenuIcon from '@/app/(loggedIn)/_component/svg/NavMenuIcon'
import NavMenuWriteIcon from '@/app/(loggedIn)/_component/svg/NavMenuWriteIcon'
import SearchSidebar from '@/app/(loggedIn)/_component/SearchSidebar'
import AlarmSidebar from '@/app/(loggedIn)/_component/AlarmSidebar'
import cx from 'classnames'
import Image from 'next/image'
import MoreMenu from '@/app/(loggedIn)/_component/MoreMenu'
// import {useStore} from "zustand/esm/index";
import { useMenuStore } from '@/store/moreMenu'
import style from './navMenu.module.scss'
import logo from '../../../../public/logo.png'

function NavMenu() {
  const me = {
    id: 'h._jinny',
    nickname: '혜진',
    image: '/profile_image.jpg',
    following: 123,
    follower: 53,
  }

  const segment = useSelectedLayoutSegment()
  const [currentSegment, setCurrentSegment] = useState('')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)

  const isMoreMenuOpen = useMenuStore((state: any) => state.isMoreMenuOpen)
  const setIsMoreMenuOpen = useMenuStore(
    (state: any) => state.setIsMoreMenuOpen,
  )

  useEffect(() => {
    if (segment === 'write') {
      setCurrentSegment('home')
    } else {
      setCurrentSegment(segment)
    }
  }, [segment])

  useEffect(() => {
    if (currentSegment === 'search' || currentSegment === 'alarm') {
      setIsSidebarOpen(true)
    } else {
      setIsSidebarOpen(false)
    }
  }, [currentSegment])

  const segmentHandler = (url) => {
    // 'search' 나 'alarm' 버튼의 경우, 활성화된 상태에서 버튼을 한번 더 클릭시 현재 페이지(segment) 기준으로 버튼 활성화
    // 'search' <-> 'alarm' 서로 버튼을 연달아 누르면 현재 페이지(segment) 기준 버튼 활성화 x
    if ((currentSegment === 'search' || 'alarm') && url === currentSegment) {
      setCurrentSegment(segment) // 검색이나 알림을 누를시 기존의 segment 로 변환
    } else {
      setCurrentSegment(url)
    }
  }

  const navArr = [
    { url: 'home', title: '홈', link: true },
    { url: 'search', title: '검색', link: false },
    { url: 'explore', title: '탐색 탭', link: true },
    { url: 'message', title: '메시지', link: true },
    { url: 'alarm', title: '알림', link: false },
  ]

  return (
    <nav
      role="navigation"
      className={cx(isSidebarOpen && style.sidebarOpened, style.navMenu)}
    >
      {/* {JSON.stringify(isSidebarOpen)} */}
      {/* {JSON.stringify(isMoreMenuOpen)} */}
      <Link href="/" className={style.logo}>
        <Image src={logo} width={110} alt="logo" />
      </Link>
      <ul className={style.menuList}>
        {navArr?.map((nav) => (
          <li className={style.menuItem} key={nav.url}>
            {nav?.link ? (
              <Link
                href={`/${nav.url}`}
                className={style.menuButton}
                onClick={() => segmentHandler(nav.url)}
              >
                <NavMenuIcon
                  type={nav.url}
                  active={currentSegment === nav.url}
                />
                <span
                  className={cx(
                    isSidebarOpen && style.sidebarOpened,
                    currentSegment === nav.url && style.bold,
                  )}
                >
                  {nav.title}
                </span>
              </Link>
            ) : (
              <button
                type="button"
                className={style.menuButton}
                onClick={() => {
                  segmentHandler(nav.url)
                }}
              >
                <NavMenuIcon
                  type={nav.url}
                  active={currentSegment === nav.url}
                />
                <span className={cx(isSidebarOpen && style.sidebarOpened)}>
                  {nav.title}
                </span>
              </button>
            )}
          </li>
        ))}
        <li className={style.menuItem} key="write">
          <Link href="/write" className={style.menuButton}>
            <NavMenuWriteIcon />
            <span>만들기</span>
          </Link>
          {/* TODO: PostForm 컴포넌트 바깥으로 뺀 후 zustand 를 이용하여 state 관리  */}
        </li>
        <li className={style.menuItem} key={me?.id}>
          <Link
            href={`${me?.id}`}
            className={style.menuButton}
            onClick={() => segmentHandler(`${me?.id}`)}
          >
            <CircleProfile
              src={me?.image}
              width={24}
              height={24}
              alt={me?.id}
              border="2px solid #000"
            />
            <span
              style={{
                fontWeight: currentSegment === me?.id ? 'bold' : 'normal',
              }}
            >
              프로필
            </span>
          </Link>
        </li>
        <li className={style.moreMenuBtn}>
          <button
            className={style.menuButton}
            type="button"
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
          >
            {isMoreMenuOpen ? (
              <svg
                aria-label="설정"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>설정</title>
                <path d="M3.5 6.5h17a1.5 1.5 0 0 0 0-3h-17a1.5 1.5 0 0 0 0 3Zm17 4h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Zm0 7h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Z"></path>
              </svg>
            ) : (
              <svg
                aria-label="설정"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>설정</title>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="3"
                  x2="21"
                  y1="4"
                  y2="4"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="3"
                  x2="21"
                  y1="12"
                  y2="12"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="3"
                  x2="21"
                  y1="20"
                  y2="20"
                ></line>
              </svg>
            )}
            <span style={{ fontWeight: `${isMoreMenuOpen ? 'bold' : ''}` }}>
              더보기
            </span>
          </button>
        </li>
      </ul>
      <MoreMenu />
      <SearchSidebar isOpen={currentSegment === 'search'} />
      <AlarmSidebar isOpen={currentSegment === 'alarm'} />
    </nav>
  )
}

export default NavMenu
