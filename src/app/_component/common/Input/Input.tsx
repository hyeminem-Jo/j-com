'use client'

import { useController } from 'react-hook-form'
import style from './input.module.scss'

function Input({
  control,
  name,
  rules,
  required = false,
  type = 'text',
  label = '',
  maxLength = 0,
  placeholder = '',
  onChange = () => {},
  disabled,
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
    <div className={style.field}>
      <div
        className={`${type === 'checkbox' ? 'checkbox' : ''} ${style.inputForm}`}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <input
          id={name}
          type={type}
          className="input"
          value={field.value}
          // value={field.value || ''}
          onChange={field.onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
        {error && (
          <span className={style.error}>
            <em>*</em>
            {error.message}
          </span>
        )}
      </div>
    </div>
  )
}

export default Input
