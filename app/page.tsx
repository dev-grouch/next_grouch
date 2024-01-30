import styles from '@styles/page.module.scss'
import Container from '@components/container/container'
import ContactForm from '@components/contact_form/contact_form'
import H1 from '@/components/h1/h1'
import H2 from '@/components/h2/h2'
import P from '@/components/p/p'
import LinkButton from '@/components/linkButton/linkButton'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title:
    'Websites for small business, email support, and fullstack engineering | grouch.dev',
  description:
    'Web development and programming services. Based in the Asheville, NC area. Custom websites, small business email support, and contract programming.',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Container color={'semiDark'}>
        <H1>&gt; hi!</H1>
        <P>
          Welcome to grouch.dev, where we can help you with all aspects of your
          online presence with a custom website and email support, or as
          programming resource for an existing project.
        </P>

        <P>
          We&apos;re all about turning grumbles into greatness! We embrace the
          grumpiness that can sometimes accompany the ever-changing world of
          technology.
        </P>

        <P>
          <LinkButton href="#customWebsites" text="learn more" />
        </P>
      </Container>

      <Container id="customWebsites" color={'purple'}>
        <H2>Custom Websites</H2>

        <P>
          We create custom websites tailored to your specific needs. Whether you
          need a professional online portfolio, a sleek landing page, or an
          easy-to-navigate blog, we&apos;ve got you covered.
        </P>

        <P>
          <LinkButton href="/custom-websites" text="learn more" />
        </P>
      </Container>

      <ContactForm />

      <Container color={'red'}>
        <H2>
          Small Business Email <br />& Website Support
        </H2>

        <P>
          Navigating the digital world can be tricky, but we&apos;re here to
          help! We provide small business email support to ensure your
          communication tools and online presence are seamless and top-tier.
        </P>

        <P>
          <LinkButton
            href="/small-business-email-support-and-website-maintenance"
            text="learn more"
          />
        </P>
      </Container>

      <Container color={'semiDark'}>
        <H2>Contract Programming</H2>

        <P>
          Need an experienced programmer to help bring your project to life?
          Look no further! With experience in React, Typescript, and Ruby on
          Rails, we offer contract programming services to meet your unique
          needs and help you achieve your business goals.
        </P>

        <P>
          <LinkButton href="#contact" text="get in touch" />
        </P>
      </Container>
    </main>
  )
}
