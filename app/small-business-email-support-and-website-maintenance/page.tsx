import styles from '@styles/page.module.scss'
import Container from '@components/container/container'
import ContactForm from '@components/contact_form/contact_form'
import H1 from '@/components/h1/h1'
import H2 from '@/components/h2/h2'
import P from '@/components/p/p'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Small Business Email and Website Support | grouch.dev',
  description:
    'Small business email support. Based in the Asheville, NC area. Custom websites, small business email support, and contract programming.',
}

export default function EmailSupport() {
  return (
    <main className={styles.main}>
      <Container color={'semiDark'}>
        <H1>Reliable email without the spam</H1>
        <P>
          Professional email doesn&apos;t have to be complicated. We can help
          you get setup with{' '}
          <Link href={'https://workspace.google.com/'} target="_blank">
            Google Workspace
          </Link>{' '}
          in as little as 2 days, with no email interuption.
        </P>

        <P>
          <strong>Your</strong> email address, on <strong>your</strong> domain.
          No more <code>@gmail.com</code> or <code>@yahoo.com</code> for your
          business email!
        </P>

        <P>
          We can also help you switch from hosted Outlook email or another
          provider.
        </P>
      </Container>

      <Container id="customWebsites" color={'purple'}>
        <H2>Easily setup an email alias</H2>

        <P>
          With{' '}
          <Link href={'https://workspace.google.com/'} target="_blank">
            Google Workspace
          </Link>
          , you can easily setup an email alias (or many!) to allow you to send
          and receive email from multiple addresses, all from the same inbox.
        </P>

        <P>
          Don&apos;t need multiple accounts, but would like to have a catch-all
          address, or a <code>support@</code> email? We can help with that too!
        </P>
      </Container>

      <ContactForm />
    </main>
  )
}
