'use client'

import cx from 'classnames'
import style from '../sidebar.module.scss'
import { Button, TextButton } from '@/app/_component/common/Button/Button'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import IcSearch from '@/app/(loggedIn)/_component/svg/IcSearch'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import IcClose from '@/app/(loggedIn)/_component/svg/IcClose'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import AlarmList from "@/app/(loggedIn)/_component/AlarmSidebar/AlarmList";

function AlarmSidebar({ isOpen }) {
  // 1. 내 댓글에 좋아요 누름
  // 1-2. 내 댓글에 좋아요 누름 (여러 명)
  // 2. 내 스토리에 좋아요 누름
  // 2-2. 내 스토리에 좋아요 누름 (여러 명)
  // 3. 내 게시물에 좋아요 누름
  // 3-2. 내 게시물에 좋아요 누름 (여러 명)
  // 4. 댓글에 나를 태그함

  const alarmData = [
    {
      User: [
        {
          id: 'min_00a',
          nickname: '민아',
          image: '/user.jpg',
        },
      ],
      type: 'follow',
      text: `님이 회원님을 팔로우하기 시작했습니다`,
      createdAt: new Date(new Date().setDate(new Date().getDate() - 0)), // 오늘
      // createdAt: new Date(new Date().setDate(new Date().getDate() - 0)), // 오늘
    },
    {
      User: [
        {
          id: 'nawm_eeee',
          nickname: '김진명',
          image: '/user-01.jpg',
        },
      ],
      type: 'likePost',
      text: '게시글을 좋아합니다',
      Content: {
        desc: '',
        image: '/media01.png',
      },
      createdAt: new Date(new Date().setDate(new Date().getDate() - 0)), //  오늘
    },
    {
      User: [
        {
          id: 'veenoo',
          nickname: '조수빈',
          image: '/user.jpg',
        },
      ],
      type: 'mention',
      text: '님이 댓글에서 회원님을 언급했습니다',
      Content: {
        desc: '이거 봄?ㅋㅋㅋㅋ',
        image: '/media01.png',
      },
      createdAt: new Date(new Date().setDate(new Date().getDate() - 3)), // 3일 전
    },
    {
      User: [
        {
          id: 'jj_jinny',
          nickname: '조혜진',
          image: '/user.jpg',
        },
        {
          id: 'veenoo',
          nickname: '조수빈',
          image: '/user.jpg',
        },
        {
          id: 'h._seung',
          nickname: '랍뷰희승',
          image: '/user.jpg',
        },
        {
          id: 'jin_woo',
          nickname: '김김진진우우',
          image: '/user.jpg',
        },
        {
          id: 'min_00a',
          nickname: '민아',
          image: '/user.jpg',
        },
      ],
      type: 'likePost',
      text: '게시글을 좋아합니다',
      Content: {
        desc: '',
        image: '/media01.png',
      },
      createdAt: new Date(new Date().setDate(new Date().getDate() - 4)), // 4일 전
    },
    {
      User: [
        {
          id: 'h._seung',
          nickname: '랍뷰희승',
          image: '/user.jpg',
        },
      ],
      type: 'mention',
      text: '님이 댓글에서 회원님을 언급했습니다',
      Content: {
        desc: '그러자!!',
        image: '/media02.png',
      },
      createdAt: new Date(new Date().setDate(new Date().getDate() - 5)), // 5일 전
    },
    {
      User: [
        {
          id: 'jin_woo',
          nickname: '김김진진우우',
          image: '/user.jpg',
        },
      ],
      type: 'comment',
      text: '님이 게시글에 댓글을 작성했습니다',
      Content: {
        desc: '잘나왔네',
        image: '/media02.png',
      },
      createdAt: new Date(new Date(new Date().setDate(new Date().getDate() - 6))), // 12일 전
    },
    {
      User: [
        {
          id: 'jin_woo',
          nickname: '김김진진우우',
          image: '/user.jpg',
        },
      ],
      type: 'comment',
      text: '님이 게시글에 댓글을 작성했습니다',
      Content: {
        desc: '잘나왔네',
        image: '/media02.png',
      },
      createdAt: new Date(new Date(new Date().setDate(new Date().getDate() - 6))), // 12일 전
    },
    {
      User: [
        {
          id: 'jin_woo',
          nickname: '김김진진우우',
          image: '/user.jpg',
        },
      ],
      type: 'comment',
      text: '님이 게시글에 댓글을 작성했습니다',
      Content: {
        desc: '잘나왔네',
        image: '/media02.png',
      },
      createdAt: new Date(new Date(new Date().setDate(new Date().getDate() - 6))), // 12일 전
    },
    {
      User: [
        {
          id: 'jin_woo',
          nickname: '김김진진우우',
          image: '/user.jpg',
        },
      ],
      type: 'comment',
      text: '님이 게시글에 댓글을 작성했습니다',
      Content: {
        desc: '잘나왔네',
        image: '/media02.png',
      },
      createdAt: new Date(new Date(new Date().setDate(new Date().getDate() - 6))), // 12일 전
    },
    {
      User: [
        {
          id: 'jin_woo',
          nickname: '김김진진우우',
          image: '/user.jpg',
        },
      ],
      type: 'comment',
      text: '님이 게시글에 댓글을 작성했습니다',
      Content: {
        desc: '잘나왔네',
        image: '/media02.png',
      },
      createdAt: new Date(new Date(new Date().setDate(new Date().getDate() - 6))), // 12일 전
    },
    {
      User: [
        {
          id: 'jin_woo',
          nickname: '김김진진우우',
          image: '/user.jpg',
        },
      ],
      type: 'comment',
      text: '님이 게시글에 댓글을 작성했습니다',
      Content: {
        desc: '잘나왔네',
        image: '/media02.png',
      },
      createdAt: new Date(new Date(new Date().setDate(new Date().getDate() - 6))), // 12일 전
    },
    {
      User: [
        {
          id: 'jin_woo',
          nickname: '김김진진우우',
          image: '/user.jpg',
        },
      ],
      type: 'comment',
      text: '님이 게시글에 댓글을 작성했습니다',
      Content: {
        desc: '잘나왔네',
        image: '/media02.png',
      },
      createdAt: new Date(new Date(new Date().setDate(new Date().getDate() - 6))), // 12일 전
    },
    {
      User: [
        {
          id: 'jin_woo',
          nickname: '김김진진우우',
          image: '/user.jpg',
        },
      ],
      type: 'comment',
      text: '님이 게시글에 댓글을 작성했습니다',
      Content: {
        desc: '잘나왔네',
        image: '/media02.png',
      },
      createdAt: new Date(new Date(new Date().setDate(new Date().getDate() - 6))), // 12일 전
    }
  ]

  const [todayAlarm, setTodayAlarm] = useState([])
  const [thisWeekAlarm, setThisWeekAlarm] = useState([])
  const [thisMonthAlarm, setThisMonthAlarm] = useState([])

  useEffect(() => {
    // 오늘 알림을 임시 배열로 수집
    const tempTodayAlarm = []
    const tempThisWeekAlarm = []
    const tempThisMonthAlarm = []

    alarmData.map((data, index) => {
      const now = new Date()
      const nowDate = now.getDate()
      const nowMonth = now.getMonth()
      const nowYear = now.getFullYear()

      const day = new Date(data?.createdAt)
      const today = new Date(nowYear, nowMonth, nowDate)

      // 이번 주의 첫 번째 날 (일요일)
      const firstDayOfThisWeek = new Date(today.setDate(today.getDate() - today.getDay()));

      // console.log(222222, firstDayOfThisWeek.getFullYear() === day.getFullYear(),
      //   firstDayOfThisWeek.getMonth() === day.getMonth(),
      //   firstDayOfThisWeek.getDate() <= day.getDate(),
      //   firstDayOfThisWeek.getTime() <= day.getTime(), data.User[0]?.id)

      if (
        // 오늘
        nowYear === day.getFullYear() &&
        nowMonth === day.getMonth() &&
        nowDate === day.getDate()
      ) {
        if (!tempTodayAlarm.some((alarm) => alarm === data)) {
          tempTodayAlarm.push(data)
        }
      } else if (
        firstDayOfThisWeek.getFullYear() === day.getFullYear() &&
        firstDayOfThisWeek.getMonth() === day.getMonth() &&
        firstDayOfThisWeek.getDate() <= day.getDate()
      ) {
        // 이번주
        console.log(55555, data.User[0]?.id)
        tempThisWeekAlarm.push(data)
      } else if (firstDayOfThisWeek.getFullYear() === day.getFullYear()) {
        tempThisMonthAlarm.push(data)
      }
    })
    // 상태를 한 번만 업데이트
    setTodayAlarm(tempTodayAlarm)
    setThisWeekAlarm(tempThisWeekAlarm)
    setThisMonthAlarm(tempThisMonthAlarm)
  }, [alarmData.length])

  console.log('이번주 알림 리스트: ', thisWeekAlarm)

  return (
    <div
      role="dialog"
      className={cx(style.sidebar, isOpen && style.opened, style.alarm)}
    >
      <div className={style.sidebarInner}>
        <h3 className={style.sidebarTitle}>알림</h3>
        <div className={style.sideBarContentWrap}>
          <div className={style.sideBarContent}>
            <h4 className={style.sidebarSubTitle}>
              <span>오늘</span>
            </h4>
            <AlarmList data={todayAlarm} />
          </div>
          <div className={style.sideBarContent}>
            <h4 className={style.sidebarSubTitle}>
              <span>이번 주</span>
              {/*const firstDayOfThisWeek = new Date(today.setDate(today.getDate() - today.getDay()));*/}
            </h4>
            <AlarmList data={thisWeekAlarm} />
          </div>
          <div className={style.sideBarContent}>
            <h4 className={style.sidebarSubTitle}>
              <span>이번 달</span>
              {/*const firstDayOfThisWeek = new Date(today.setDate(today.getDate() - today.getDay()));*/}
            </h4>
            <AlarmList data={thisMonthAlarm} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlarmSidebar
