'use client'

import { useForm } from 'react-hook-form'
import cx from 'classnames'
import SearchInput from '@/app/(loggedIn)/_component/SearchInput/SearchInput'
import style from '../sidebar.module.scss'
import { TextButton } from '@/app/_component/common/Button/Button'
import CircleProfile from '@/app/(loggedIn)/_component/CircleProfile'
import IcSearch from "@/app/(loggedIn)/_component/svg/IcSearch";
import Link from "next/link";
import {useRouter} from "next/navigation";
import IcClose from "@/app/(loggedIn)/_component/svg/IcClose";

function SearchSidebar({ isOpen }) {
  const {
    control,
    reset,
    formState: { isDirty },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      searchWord: '',
    },
  })

  const searchList = [
    {
      searchWord: '케이크',
      isUser: false,
    },
    {
      id: 'veenoo',
      nickname: '조수빈',
      image: '/user.jpg',
      isUser: true,
    },
    {
      id: 'jin_woo',
      nickname: '김김진진우우',
      image: '/user.jpg',
      isUser: true,
    },
  ]
  const router = useRouter();

  return (
    <div role="dialog" className={cx(style.sidebar, isOpen && style.opened)}>
      <div className={style.sidebarInner}>
        <h3 className={style.sidebarTitle}>검색</h3>
        <SearchInput
          name="searchWord"
          control={control}
          reset={reset}
          isDirty={isDirty}
          maxLength="30"
          type="text"
          placeholder="검색"
        />
        <div className={style.sidebarContent}>
          <h4 className={style.sidebarSubTitle}>
            <span>최근 검색 항목</span>
            <TextButton>모두 지우기</TextButton>
          </h4>
          <ul className={style.searchList}>
            {searchList.map((item, index) => {
              return (
                <li className={style.searchItem}>
                  <Link href={item?.isUser ? `/${item?.id}` : `/search?q=${item?.searchWord}`} className={style.searchLink}>
                    {item?.isUser ? (
                      <div className={style.searchItemInfo}>
                        <CircleProfile
                          src={item?.image}
                          size={42}
                          alt={item?.id}
                          ring={false}
                        />
                        <div className={style.searchUser}>
                          <strong>{item?.id}</strong>
                          <span>{item?.nickname}</span>
                        </div>
                      </div>
                    ) : (
                      <div className={style.searchItemInfo}>
                        <div className={style.searchIcon}>
                          <IcSearch size={16} color="#aaa" />
                        </div>
                        <div className={style.searchWord}>강남 케이크</div>
                      </div>
                    )}
                    {/* TODO: 검색 기록 삭제하기 기능 */}
                    <button type="button" className="deleteBtn">
                      <IcClose size={16} color={'gray'} />
                    </button>
                  </Link>
                </li>
              )
            })}
          </ul>
          {/*검색어: {watch('searchWord')}*/}
        </div>
      </div>
    </div>
  )
}

export default SearchSidebar
