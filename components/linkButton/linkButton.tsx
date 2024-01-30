import Link from 'next/link'
import styles from './linkButton.module.scss'

type LinkButtonProps = {
  text: string
  href: string
}

const LinkButton = ({ href, text }: LinkButtonProps) => {
  return (
    <Link href={href} className={styles.linkButton}>
      {text}
    </Link>
  )
}

export default LinkButton
