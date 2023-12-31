import styles from './page.module.scss'
import Container from '@components/container/container'
import ContactForm from '@components/contact_form/contact_form'
import H1 from '@/components/h1/h1'
import H2 from '@/components/h2/h2'
import P from '@/components/p/p'

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        <H1>&gt; hi!</H1>
        <P>
          Welcome to grouch.dev, where we&apos;re all about turning grumbles
          into greatness. We embrace the grumpiness that can sometimes accompany
          the ever-changing world of technology. Our name is a nod to those
          grouchy moments we&apos;ve all experienced when faced with a new
          challenge or change. But, you know what? A sprinkle of understanding,
          a dash of knowledge, and a heap of empathy can turn any frown upside
          down.
        </P>
      </Container>

      <Container>
        <H2>custom websites</H2>

        <P>
          In addition to our programming and support services, we also create
          small custom websites tailored to your specific requirements. Whether
          you need a professional online portfolio, a sleek landing page, or an
          easy-to-navigate blog, we&apos;ve got you covered.
        </P>

        <P>
          <a href="#learnMore" className='coming-soon' title="coming soon">learn more</a>
        </P>
      </Container>

      <ContactForm />

      <Container>
        <H2>Small Business Email <br />& Website Support</H2>

        <P>
          Navigating the digital world can be tricky, but we&apos;re here to
          help! We provide small business email support and website assistance
          to ensure your communication tools and online presence are top-notch.
        </P>

        <P>
          <a href="#learnMore" className='coming-soon' title="coming soon">learn more</a>
        </P>
      </Container>

      <Container>
        <H2>Contract Programming</H2>

        <P>
          Need an experienced programmer to bring your project to life? Look no
          further! With expertise in Ruby on Rails and React, we offer contract
          programming services to meet your unique needs and help you achieve
          your business goals.
        </P>

        <P>
          <a href="#learnMore" className='coming-soon' title="coming soon">learn more</a>
        </P>
      </Container>
    </main>
  )
}
