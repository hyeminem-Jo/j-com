'use client'

import { useController } from 'react-hook-form'
import IcDelete from '@/app/(loggedIn)/_component/svg/IcDelete'
import { useState } from 'react'
import IcSearch from '@/app/(loggedIn)/_component/svg/IcSearch'
import cx from 'classnames'
import style from './SearchInput.module.scss'

function SearchInput({
  control,
  name,
  type = 'text',
  maxLength = 0,
  placeholder = '',
  disabled,
  reset,
  ...rest
}) {
  const { field } = useController({
    name,
    control,
  })

  const [isFocus, setIsFocus] = useState<boolean>(false)

  return (
    <div className={style.searchInputWrap}>
      <input
        id={name}
        type={type}
        className={cx(isFocus && style.isFocus, style.searchInput)}
        value={field.value}
        onChange={field.onChange}
        onFocus={() => {
          setIsFocus(true)
        }}
        onBlur={() => {
          setIsFocus(false)
        }}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {isFocus ? (
        <button
          type="button"
          className={style.searchInputDeleteBtn}
          onClick={reset}
        >
          <IcDelete size={8} color="rgb(239, 239, 239)" />
        </button>
      ) : (
        <div className={style.searchIcon}>
          <IcSearch size={16} color="#aaa" />
          {/*  TODO: 색 변수로 정리하기 */}
        </div>
      )}
    </div>
  )
}

export default SearchInput
