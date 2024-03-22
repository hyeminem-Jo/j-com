'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import cx from 'classnames'
import style from './tab.module.scss'

function Tab() {
  const pathname = usePathname()
  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <ul className={style.contentsTab} role="tablist">
      <li className={cx(pathname === '/h._jinny' && style.active)} role="tab">
        <Link href="/h._jinny/">
          <svg
            aria-label=""
            className="x1lliihq x1n2onr6 x1roi4f4"
            fill="currentColor"
            height="13"
            role="img"
            viewBox="0 0 24 24"
            width="13"
          >
            <title></title>
            <rect
              fill="none"
              height="18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              width="18"
              x="3"
              y="3"
            ></rect>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="9.015"
              x2="9.015"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="14.985"
              x2="14.985"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="9.015"
              y2="9.015"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="14.985"
              y2="14.985"
            ></line>
          </svg>
          <span>게시물</span>
        </Link>
      </li>
      <li className={cx(pathname === '/h._jinny/saved' && style.active)} role="tab">
        <Link href="/h._jinny/saved">
          <svg
            aria-label=""
            className="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height="13"
            role="img"
            viewBox="0 0 24 24"
            width="13"
          >
            <title></title>
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
      <li className={cx(pathname === '/h._jinny/tagged' && style.active)} role="tab">
        <Link href="/h._jinny/tagged">
          <svg
            aria-label=""
            className="x1lliihq x1n2onr6 x1roi4f4"
            fill="currentColor"
            height="13"
            role="img"
            viewBox="0 0 24 24"
            width="13"
          >
            <title></title>
            <path
              d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <circle
              cx="12.072"
              cy="11.075"
              fill="none"
              r="3.556"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
          </svg>
          <span>태그됨</span>
        </Link>
      </li>
    </ul>
  )
}

export default Tab
