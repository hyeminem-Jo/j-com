'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import style from './navMenu.module.scss'

function NavMenu() {
  const segment = useSelectedLayoutSegment()
  const [currentSegment, setCurrentSegment] = useState('')
  // console.log('segment :', segment)
  // console.log('currentSegment: ', currentSegment)

  useEffect(() => {
    if (segment !== currentSegment) {
      setCurrentSegment(segment)
    }
  }, [segment])

  const segmentHandler = (url) => {
    setCurrentSegment(url)
    if (currentSegment === 'search') {
      setCurrentSegment(segment)
    }
  }

  return (
    <nav>
      <ul className={style.menuList}>
        <li>
          <Link href="/home" onClick={() => segmentHandler('home')}>
            <div className={style.menuItem}>
              {currentSegment === 'home' ? (
                <>
                  <svg
                    aria-label="홈"
                    className="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>홈</title>
                    <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z" />
                  </svg>
                  <span style={{ fontWeight: 'bold' }}>홈</span>
                </>
              ) : (
                <>
                  <svg
                    aria-label="홈"
                    className="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>홈</title>
                    <path
                      d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>홈</span>
                </>
              )}
            </div>
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => segmentHandler('search')}>
            <div className={style.menuItem}>
              {currentSegment === 'search' ? (
                <>
                  <svg
                    aria-label="검색"
                    className="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>검색</title>
                    <path
                      d="M18.5 10.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      x1="16.511"
                      x2="21.643"
                      y1="16.511"
                      y2="21.643"
                    />
                  </svg>
                  <span style={{ fontWeight: 'bold' }}>검색(true)</span>
                </>
              ) : (
                <>
                  <svg
                    aria-label="검색"
                    className="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>검색</title>
                    <path
                      d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <line
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="16.511"
                      x2="22"
                      y1="16.511"
                      y2="22"
                    />
                  </svg>
                  <span>검색(false)</span>
                </>
              )}
            </div>
          </Link>
        </li>
        <li>
          <Link href="/explore" onClick={() => segmentHandler('explore')}>
            <div className={style.menuItem}>
              {currentSegment === 'explore' ? (
                <>
                  <svg
                    aria-label="탐색 탭"
                    className="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>탐색 탭</title>
                    <path d="m13.173 13.164 1.491-3.829-3.83 1.49ZM12.001.5a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12.001.5Zm5.35 7.443-2.478 6.369a1 1 0 0 1-.57.569l-6.36 2.47a1 1 0 0 1-1.294-1.294l2.48-6.369a1 1 0 0 1 .57-.569l6.359-2.47a1 1 0 0 1 1.294 1.294Z" />
                  </svg>
                  <span style={{ fontWeight: 'bold' }}>탐색 탭</span>
                </>
              ) : (
                <>
                  <svg
                    aria-label="탐색 탭"
                    className="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>탐색 탭</title>
                    <polygon
                      fill="none"
                      points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <polygon
                      fillRule="evenodd"
                      points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                    />
                    <circle
                      cx="12.001"
                      cy="12.005"
                      fill="none"
                      r="10.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>탐색 탭</span>
                </>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
