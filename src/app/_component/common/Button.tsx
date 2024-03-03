import style from './button.module.scss'

export function Button({
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

export function TextButton({ children, type, onClick, ...rest }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={style.textButton}
      {...rest}
    >
      {children}
    </button>
  )
}

// export default Button
