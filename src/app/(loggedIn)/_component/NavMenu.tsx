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
      {JSON.stringify(isSidebarOpen)}
      <Link href="/" className={style.logo}>
        <Image src={logo} width={110} alt="logo" />
      </Link>
      <ul>
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
      </ul>
      <SearchSidebar isOpen={currentSegment === 'search'} />
      <AlarmSidebar isOpen={currentSegment === 'alarm'} />
    </nav>
  )
}

export default NavMenu
