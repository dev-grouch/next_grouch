import cx from 'classnames'

import styles from './p.module.scss'

type PProps = {
  children: React.ReactNode
  className?: string
}

const P = ({ children, className }: PProps) => {
  return (
    <p className={cx(styles.p, className)}>
      {children}
    </p>
  )
}

export default P
