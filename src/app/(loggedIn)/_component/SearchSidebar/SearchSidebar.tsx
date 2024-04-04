'use client'

import { useForm } from 'react-hook-form'
import cx from 'classnames'
// import { useCallback } from 'react'
import SearchInput from '@/app/(loggedIn)/_component/SearchInput/SearchInput'
import DeleteIcon from '@/app/(loggedIn)/_component/svg/DeleteIcon'
import style from '../sidebar.module.scss'

function SearchSidebar({ isOpen }) {
  const { watch, control, setValue, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      searchWord: '',
    },
  })

  const resetSearchWord = () => {
    console.log(444)
    // reset()
  }

  return (
    <div role="dialog" className={cx(style.sidebar, isOpen && style.opened)}>
      <div className={style.sidebarInner}>
        <h3 className={style.sidebarTitle}>검색</h3>
        <SearchInput
          name="searchWord"
          control={control}
          // reset={setValue('searchWord', '')}
          maxLength="30"
          type="text"
          placeholder="검색"
        />
        {JSON.stringify(watch('searchWord'))}
        <button type="button" onClick={reset}>
          삭제
        </button>
      </div>
    </div>
  )
}

export default SearchSidebar
