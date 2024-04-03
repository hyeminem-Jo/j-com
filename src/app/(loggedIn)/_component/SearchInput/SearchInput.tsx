'use client'

import { useController } from 'react-hook-form'
import style from './SearchInput.module.scss'

function SearchInput({
  control,
  name,
  type = 'text',
  maxLength = 0,
  placeholder = '',
  disabled,
  ...rest
}) {
  const { field } = useController({
    name,
    control,
  })

  return (
    <div className={style.searchInputWrap}>
      <input
        id={name}
        type={type}
        className={style.searchInput}
        value={field.value}
        onChange={field.onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
    </div>
  )
}

export default SearchInput
