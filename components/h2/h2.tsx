import styles from './h2.module.scss'

type H2Props = {
  children: React.ReactNode
}

const H2 = ({ children }: H2Props) => {
  return (
    <h2 className={styles.h2}>
      {children}
    </h2>
  )
}

export default H2
