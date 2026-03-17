import type { FC, ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  variant?: 'primary' | 'ghost'
}

const Button: FC<Props> = ({
  children,
  loading = false,
  variant = 'primary',
  disabled,
  className,
  ...rest
}) => {
  return (
    <button
      className={[styles.btn, styles[variant], className].filter(Boolean).join(' ')}
      disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      <span>{children}</span>
    </button>
  )
}

export default Button
