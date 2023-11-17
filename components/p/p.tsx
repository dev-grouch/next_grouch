import cx from 'classnames'

import styles from './p.module.scss'

type PProps = {
  children: React.ReactNode
  extraClass?: string | string[]
}

const P = ({ children, extraClass }: PProps) => {
  return (
    <p className={cx(styles.p, extraClass)}>
      {children}
    </p>
  )
}

export default P
