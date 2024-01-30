import GrouchLogoText from '../icons/grouch'
import styles from './header.module.scss'
import Container from '@components/container/container'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container extraClass={styles.wrapper} full>
        <div className={styles.logo}>
          <a href="/" title="grouch development">
            <GrouchLogoText />
          </a>
        </div>
        <ul>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header
