import styles from '@styles/page.module.scss'
import Container from '@components/container/container'
import ContactForm from '@components/contact_form/contact_form'
import H1 from '@/components/h1/h1'
import H2 from '@/components/h2/h2'
import P from '@/components/p/p'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Web Design and Website Development | grouch.dev',
  description:
    'Small business email support. Based in the Asheville, NC area. Custom websites, small business email support, and contract programming.',
}

export default function CustomWebsites() {
  return (
    <main className={styles.main}>
      <Container color={'semiDark'}>
        <H1>Custom Websites</H1>
        <P>
          Does your website need a refresh, or are you starting from scratch? We
          can help you with all aspects of your online presence with a custom
          website and email support. We love to work with small businesses,
          artists, and non-profits!
        </P>

        <P>
          Let us do what <strong>we</strong> do best so you can focus on what{' '}
          <strong>you</strong> do best!
        </P>
      </Container>

      <Container id="customWebsites" color={'purple'}>
        <H2>Tech Brilliance, Your Way</H2>

        <P>
          Whatever your needs, we&apos;ll get you set up with the right hosting,
          domain registration, and DNS so that your website has the
          infrastructure it needs to run smoothly.
        </P>

        <P>
          Our toolkit includes React, JavaScript, TypeScript, GraphQL, NextJS,
          and Ruby on Rails.
        </P>
      </Container>

      <ContactForm />
    </main>
  )
}
