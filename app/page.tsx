import styles from './page.module.scss'
import Container from '@components/container/container'
import ContactForm from '@components/contact_form/contact_form'

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <h1>&gt; hi!</h1>
        <p>
          Welcome to grouch.dev, where we&apos;re all about turning grumbles
          into greatness. We embrace the grumpiness that can sometimes accompany
          the ever-changing world of technology. Our name is a nod to those
          grouchy moments we&apos;ve all experienced when faced with a new
          challenge or change. But, you know what? A sprinkle of understanding,
          a dash of knowledge, and a heap of empathy can turn any frown upside
          down.
        </p>
      </Container>

      <Container>
        <h2>custom websites</h2>

        <p>
          In addition to our programming and support services, we also create
          small custom websites tailored to your specific requirements. Whether
          you need a professional online portfolio, a sleek landing page, or an
          easy-to-navigate blog, we&apos;ve got you covered.
        </p>

        <p>
          <a href="#learnMore">learn more</a>
        </p>
      </Container>

      <ContactForm />

      <Container>
        <h2>
          Small Business Email <br />& Website Support
        </h2>

        <p>
          Navigating the digital world can be tricky, but we&apos;re here to
          help! We provide small business email support and website assistance
          to ensure your communication tools and online presence are top-notch.
        </p>

        <p>
          <a href="#learnMore">learn more</a>
        </p>
      </Container>

      <Container>
        <h2>Contract Programming</h2>

        <p>
          Need an experienced programmer to bring your project to life? Look no
          further! With expertise in Ruby on Rails and React, we offer contract
          programming services to meet your unique needs and help you achieve
          your business goals.
        </p>

        <p>
          <a href="#learnMore">learn more</a>
        </p>
      </Container>
    </main>
  )
}
