import React from 'react'
import style from './button.module.scss'

function Button({
  children,
  disabled,
  type = 'button',
  size = 'md',
  color = 'primary',
  onClick,
  ...rest
}) {
  return (
    <div className={style.buttonWrap}>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${size} ${color} btn`}
        {...rest}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
