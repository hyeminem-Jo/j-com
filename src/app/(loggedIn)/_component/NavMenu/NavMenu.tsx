'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useEffect, useState } from 'react'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import IcMenu from '@/app/(loggedIn)/_component/svg/IcMenu'
import IcNavMenuWrite from '@/app/(loggedIn)/_component/svg/IcNavMenuWrite'
import SearchSidebar from '@/app/(loggedIn)/_component/SlideBar/SearchSidebar'
import AlarmSidebar from '@/app/(loggedIn)/_component/SlideBar/AlarmSidebar'
import cx from 'classnames'
import Image from 'next/image'
import MoreMenu from '@/app/(loggedIn)/_component/MoreMenu/MoreMenu'
import { useMenuStore } from '@/store/moreMenu'
import IcNavMore from '@/app/(loggedIn)/_component/svg/IcNavMore'
import { useModalStore } from '@/store/modal'
import style from './navMenu.module.scss'
import logo from '../../../../../public/logo.png'
import logoIcon from '../../../../../public/logo-icon.png'
import SlideBarWrap from "@/app/(loggedIn)/_component/SlideBar/SlideBarWrap";

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
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isAlarmOpen, setIsAlarmOpen] = useState(false)

  const isMoreMenuOpen = useMenuStore((state: any) => state.isMoreMenuOpen)
  const setIsMoreMenuOpen = useMenuStore(
    (state: any) => state.setIsMoreMenuOpen,
  )

  useEffect(() => {
    setCurrentSegment(segment)
  }, [segment])

  const closeSlideBar = () => {
    setIsSearchOpen(false)
    setIsAlarmOpen(false)
  }

  const segmentHandler = (url) => {
    if (url === currentSegment) {
      setCurrentSegment(segment) // 검색이나 알림을 누를시 기존의 segment 로 변환
    } else {
      setCurrentSegment(url)
    }
    closeSlideBar()
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
      className={cx((isSearchOpen || isAlarmOpen) && style.sidebarOpened, style.navMenu)}
    >
      <Link href="/home" className={style.logo} onClick={closeSlideBar}>
        <Image
          className={cx((isSearchOpen || isAlarmOpen) && style.hide, style.logoBig)}
          src={logo}
          width={110}
          alt="logo"
        />
        <Image
          className={cx(!(isSearchOpen || isAlarmOpen) && style.hide, style.logoSmall)}
          src={logoIcon}
          width={24}
          alt="logo"
        />
      </Link>
      <ul className={style.menuList}>
        {navArr?.map((nav) => (
          <li className={style.menuItem} key={nav.url}>
            {nav?.link ? ( // 페이지 이동 버튼
              <Link
                href={`/${nav.url}`}
                className={style.menuButton}
                onClick={() => segmentHandler(nav.url)}
              >
                <IcMenu type={nav.url} active={currentSegment === nav.url && !(isSearchOpen || isAlarmOpen)} />
                <span
                  className={cx(
                    (isSearchOpen || isAlarmOpen) && style.sidebarOpened,
                    (currentSegment === nav.url && !(isSearchOpen || isAlarmOpen)) && style.bold,
                    style.navMenuTitle,
                  )}
                >
                  {nav.title}
                </span>
              </Link>
            ) : ( // 찾기, 알림 사이드바 버튼
              <button
                type="button"
                className={cx(
                  style.menuButton,
                  currentSegment === nav.url && style.active,
                )}
                onClick={() => {
                  if (nav?.url === 'search') {
                    setIsSearchOpen((prev) => !prev)
                    setIsAlarmOpen(false)
                  } else {
                    setIsAlarmOpen((prev) => !prev)
                    setIsSearchOpen(false)
                  }
                }}
              >
                <IcMenu type={nav.url} active={nav.url === 'search' ? isSearchOpen : isAlarmOpen} />
                <span
                  className={cx(
                    (isSearchOpen || isAlarmOpen) && style.sidebarOpened,
                    style.navMenuTitle,
                  )}
                >
                  {nav.title}
                </span>
              </button>
            )}
          </li>
        ))}
        {/* 게시물 작성하기 -------------------------------- */}
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
        {/* 내 프로필 보기 -------------------------------- */}
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
        {/* 더 보기 -------------------------------- */}
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
      <SlideBarWrap isOpen={isSearchOpen || isAlarmOpen} onClose={closeSlideBar}>
        <SearchSidebar isOpen={isSearchOpen} />
        <AlarmSidebar isOpen={isAlarmOpen} />
      </SlideBarWrap>
    </nav>
  )
}

export default NavMenu
