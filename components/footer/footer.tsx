import Container from '../container/container'
import styles from './footer.module.scss'

const Footer = () => (
  <footer>
    <Container extraClass={styles.footer}>
      <p>Hacked with ♡ by grouch.dev</p>
    </Container>
  </footer>
)

export default Footer
