'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useEffect, useState } from 'react'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import NavMenuIcon from '@/app/(loggedIn)/_component/svg/NavMenuIcon'
import NavMenuWriteIcon from '@/app/(loggedIn)/_component/svg/NavMenuWriteIcon'
import SearchSidebar from '@/app/(loggedIn)/_component/SearchSidebar'
import style from './navMenu.module.scss'

function NavMenu() {
  const me = {
    // 임시 정보
    id: 'h._jinny',
    nickname: '혜진',
    image: '/profile_image.jpg',
    following: 123,
    follower: 53,
  }

  const segment = useSelectedLayoutSegment()
  const [currentSegment, setCurrentSegment] = useState('')

  useEffect(() => {
    if (segment === 'write') {
      setCurrentSegment('home')
    } else {
      setCurrentSegment(segment)
    }
  }, [segment])

  const segmentHandler = (url) => {
    // 'search' 나 'alarm' 버튼의 경우, 활성화된 상태에서 버튼을 한번 더 클릭시 현재 페이지(segment) 기준으로 버튼 활성화
    // 'search' <-> 'alarm' 서로 버튼을 연달아 누르면 현재 페이지(segment) 기준 버튼 활성화 x
    if ((currentSegment === 'search' || 'alarm') && url === currentSegment) {
      setCurrentSegment(segment) // 검색이나 알림을 누를시 기존의 segment 로 변환
    } else {
      setCurrentSegment(url)
    }
  }

  useEffect(() => {
    console.log(currentSegment)
  }, [currentSegment])

  const navArr = [
    { url: 'home', title: '홈', link: true },
    { url: 'search', title: '검색', link: false },
    { url: 'explore', title: '탐색 탭', link: true },
    { url: 'message', title: '메시지', link: true },
    { url: 'alarm', title: '알림', link: false },
  ]

  return (
    <nav role="navigation">
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
                  style={{
                    fontWeight: `${currentSegment === nav.url ? 'bold' : ''}`,
                  }}
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
                <span
                  style={{
                    fontWeight: `${currentSegment === nav.url ? 'bold' : ''}`,
                  }}
                >
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
      {/* 사이드바 */}
      <SearchSidebar isOpen={isOpen} type={sideBar} />
      <AlarmSideBar isOpen={isOpen} type={sideBar} />
    </nav>
  )
}

export default NavMenu
