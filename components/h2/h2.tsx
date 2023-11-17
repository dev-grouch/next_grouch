import cx from 'classnames'

import styles from './h2.module.scss'

type H2Props = {
  children: React.ReactNode
  extraClass?: string | string[]
}

const H2 = ({ children, extraClass }: H2Props) => {
  return (
    <h2 className={cx(styles.h2, extraClass)}>
      {children}
    </h2>
  )
}

export default H2
