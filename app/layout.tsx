import cx from 'classnames'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.scss'
import Header from '@components/header/header'
import Background from '@components/background/background'
import Footer from '@components/footer/footer'
import styles from './layout.module.scss'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome to Grouch.dev — NextJS edition',
  description:
    'Web development and programming services. Based in the Asheville, NC area. Custom websites, small business email support, and contract programming.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className, styles.body)}>
          <Providers>
            <div className="foreground">
              <Header />
              {children}
              <Footer />
            </div>
            <Background />
          </Providers>
        </body>
    </html>
  )
}
