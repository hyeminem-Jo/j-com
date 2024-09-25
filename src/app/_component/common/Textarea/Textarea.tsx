'use client'

import { useController } from 'react-hook-form'
import cx from 'classnames'
import { useEffect } from 'react'
import style from './textareaPost.module.scss'

function Textarea({
  control,
  name = '',
  rules = {},
  label = '',
  placeholder = '',
  className = '',
  disabled = false,
  size = '',
  resize = false,
  maxLength = 500,
  rows = 3,
  height = 'auto',
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  isDirty = false,
  ...rest
}) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  })

  return (
    <div className={cx(style.textAreaForm, isDirty ? style.dirty : '')}>
      {label && (
        <label className={style.textAreaLabel} htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        value={field.value}
        // value={field.value || ''}
        className={cx(!resize && style.noResize, size === 'sm' && style.sm)}
        onChange={field.onChange}
        onBlur={() => {
          onBlur()
          field.onBlur()
        }}
        onFocus={onFocus}
        ref={field.ref}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        style={{ height: `${height}` }}
        {...rest}
      />
    </div>
  )
}

export default Textarea
