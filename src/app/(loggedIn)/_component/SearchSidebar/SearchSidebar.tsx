'use client'

import { useForm } from 'react-hook-form'
import cx from 'classnames'
// import { useCallback } from 'react'
import SearchInput from '@/app/(loggedIn)/_component/SearchInput/SearchInput'
import IcDelete from '@/app/(loggedIn)/_component/svg/IcDelete'
import style from '../sidebar.module.scss'

function SearchSidebar({ isOpen }) {
  const { watch, control, reset, formState: {isDirty} } = useForm({
    mode: 'onChange',
    defaultValues: {
      searchWord: '',
    },
  })

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
        {watch('searchWord')}
      </div>
    </div>
  )
}

export default SearchSidebar
