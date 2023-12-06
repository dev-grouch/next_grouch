import './globals.scss'
import cx from 'classnames'
import type { Metadata } from 'next'

import Header from '@components/header/header'
import Background from '@components/background/background'
import Footer from '@components/footer/footer'
import styles from './layout.module.scss'
import Providers from './providers'
import GoogleAnalytics from '@/components/meta/google_analytics'

export const metadata: Metadata = {
  title: 'Welcome to Grouch.dev — NextJS edition',
  description:
    'Web development and programming services. Based in the Asheville, NC area. Custom websites, small business email support, and contract programming.',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
      sizes: '32x32',
    },
    {
      rel: 'icon',
      url: '/icon.svg',
      type: 'image/svg+xml',
    },
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      url: '/site.webmanifest',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={cx(styles.body)}>
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
