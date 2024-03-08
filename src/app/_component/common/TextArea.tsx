'use client'

import { useController } from 'react-hook-form'
import style from './textArea.module.scss'
import cx from "classnames";

function TextArea({
   control,
   name = '',
   rules = {},
   label = '',
   placeholder = '',
   className = '',
   disabled = false,
   // size = 'sm',
   resize = false,
   maxLength = 0,
   rows = 3,
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
    <div className={style.textAreaForm}>
      {label && (
        <label className={style.textAreaLabel} htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        // className={cx(style.textArea, resize && style.noResize)}
        // value={field.value}
        maxLength={maxLength || 500}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        {...rest}
      />
    </div>
  )
}

export default TextArea
