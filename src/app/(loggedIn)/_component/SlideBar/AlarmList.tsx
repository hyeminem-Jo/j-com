import React from 'react'
import style from '@/app/(loggedIn)/_component/sidebar.module.scss'
import Link from 'next/link'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import Image from 'next/image'
import { Button } from '@/app/_component/common/Button/Button'

const AlarmList = ({ data }) => {
  return (
    <ul className={style.alarmList}>
      {data.map((alarm) => {
        return (
          <li className={style.alarmItem}>
            <Link href={`#`} className={style.alarmLink}>
              <div className={style.alarmItemInfo}>
                {alarm?.User?.length === 1 ? (
                  <CircleProfile
                    src={alarm?.User[0]?.image}
                    size={42}
                    alt={alarm?.User[0]?.id}
                    ring={false}
                  />
                ) : (
                  <div className={style.alarmUserWrap}>
                    {alarm?.User?.slice(0, 2).map((user, index) => (
                      <CircleProfile
                        key={user.id || index}
                        src={user.image}
                        size={30}
                        alt={user.id}
                        ring={false}
                      />
                    ))}
                  </div>
                )}

                <div className={style.alarmUser}>
                  {alarm?.type === 'follow' ? (
                    <div className={style.desc}>
                      <span>
                        <strong>{alarm?.User[0]?.id}</strong>
                        {alarm?.text}
                      </span>
                    </div>
                  ) : alarm?.type === 'likePost' ? (
                    <div className={style.desc}>
                      {alarm?.User?.length === 1 ? (
                        <span>
                          <strong>{alarm?.User[0]?.id}</strong>님이{' '}
                          {alarm?.text}
                        </span>
                      ) : (
                        alarm?.User?.length > 1 && (
                          <span>
                            <strong>{alarm?.User[0]?.id}</strong>님,{' '}
                            <strong>{alarm?.User[1]?.id}</strong>님 외&nbsp;
                            <strong>{alarm?.User?.length}</strong>명이{' '}
                            {alarm?.text}
                          </span>
                        )
                      )}
                    </div>
                  ) : alarm?.type === 'mention' ? (
                    <div className={style.desc}>
                      <span>
                        <strong>{alarm?.User[0]?.id}</strong>
                        {alarm?.text}: {alarm?.Content?.desc}
                      </span>
                    </div>
                  ) : (
                    alarm?.type === 'comment' && (
                      <div className={style.desc}>
                        <span>
                          <strong>{alarm?.User[0]?.id}</strong>
                          {alarm?.text}: {alarm?.Content?.desc}
                        </span>
                      </div>
                    )
                  )}
                  {!(alarm?.type === 'follow') ? (
                    <div className={style.media}>
                      {alarm?.Content?.image && (
                        <Image
                          src={alarm?.Content?.image}
                          width={45}
                          height={45}
                          userId={alarm?.User[0]?.id}
                          alt={`게시글 이미지`}
                        />
                      )}
                    </div>
                  ) : (
                    <div className={style.followBtn}>
                      <Button type="button" size="md" color="primary">
                        팔로우
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default AlarmList
