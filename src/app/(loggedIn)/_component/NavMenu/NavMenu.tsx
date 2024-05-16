'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useEffect, useState } from 'react'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import IcMenu from '@/app/(loggedIn)/_component/svg/IcMenu'
import IcNavMenuWrite from '@/app/(loggedIn)/_component/svg/IcNavMenuWrite'
import SearchSidebar from '@/app/(loggedIn)/_component/SearchSidebar/SearchSidebar'
import AlarmSidebar from '@/app/(loggedIn)/_component/AlarmSidebar/AlarmSidebar'
import cx from 'classnames'
import Image from 'next/image'
import MoreMenu from '@/app/(loggedIn)/_component/MoreMenu/MoreMenu'
import { useMenuStore } from '@/store/moreMenu'
import IcNavMore from '@/app/(loggedIn)/_component/svg/IcNavMore'
import { useModalStore } from '@/store/modal'
import style from './navMenu.module.scss'
import logo from '../../../../../public/logo.png'
import logoIcon from '../../../../../public/logo-icon.png'

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

  const isMoreMenuOpen = useMenuStore((state: any) => state.isMoreMenuOpen)
  const setIsMoreMenuOpen = useMenuStore(
    (state: any) => state.setIsMoreMenuOpen,
  )

  useEffect(() => {
    setCurrentSegment(segment)
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

  const openModal = useModalStore((state: any) => state.openModal)

  return (
    <nav
      role="navigation"
      className={cx(isSidebarOpen && style.sidebarOpened, style.navMenu)}
    >
      <Link href="/home" className={style.logo}>
        <Image
          className={cx(isSidebarOpen && style.hide, style.logoBig)}
          src={logo}
          width={110}
          alt="logo"
        />
        <Image
          className={cx(!isSidebarOpen && style.hide, style.logoSmall)}
          src={logoIcon}
          width={24}
          alt="logo"
        />
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
                <IcMenu type={nav.url} active={currentSegment === nav.url} />
                <span
                  className={cx(
                    isSidebarOpen && style.sidebarOpened,
                    currentSegment === nav.url && style.bold,
                    style.navMenuTitle,
                  )}
                >
                  {nav.title}
                </span>
              </Link>
            ) : (
              <button
                type="button"
                className={cx(
                  style.menuButton,
                  currentSegment === nav.url && style.active,
                )}
                onClick={() => {
                  segmentHandler(nav.url)
                }}
              >
                <IcMenu type={nav.url} active={currentSegment === nav.url} />
                <span
                  className={cx(
                    isSidebarOpen && style.sidebarOpened,
                    style.navMenuTitle,
                  )}
                >
                  {nav.title}
                </span>
              </button>
            )}
          </li>
        ))}
        <li className={style.menuItem} key="write">
          <button
            type="button"
            onClick={() => {
              openModal('writePost')
            }}
            className={style.menuButton}
          >
            <IcNavMenuWrite />
            <span className={style.navMenuTitle}>만들기</span>
          </button>
          {/* TODO: PostForm 컴포넌트 바깥으로 뺀 후 zustand 를 이용하여 state 관리  */}
        </li>
        <li className={style.menuItem} key={me?.id}>
          <Link
            href={`/${me?.id}`}
            className={style.menuButton}
            onClick={() => segmentHandler(`${me?.id}`)}
          >
            <CircleProfile
              src={me?.image}
              size={24}
              alt={me?.id}
              border="2px solid #000"
            />
            <span
              className={style.navMenuTitle}
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
            <IcNavMore size={24} active={isMoreMenuOpen} />
            <span
              className={style.navMenuTitle}
              style={{ fontWeight: `${isMoreMenuOpen ? 'bold' : ''}` }}
            >
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
