import { GoogleAnalytics } from '@next/third-parties/google'

import './globals.scss'
import cx from 'classnames'
import type { Metadata } from 'next'

import Header from '@components/header/header'
import Background from '@components/background/background'
import Footer from '@components/footer/footer'
import styles from './layout.module.scss'
import Providers from './providers'

export const metadata: Metadata = {
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
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_ROOT_URL}/images/open-graph.png`,
        width: 1200,
        height: 675,
        alt: 'Websites for small business, email support, and fullstack engineering | grouch.dev',
      },
    ],
    url: `${process.env.NEXT_PUBLIC_ROOT_URL}/`,
    type: 'website',
    siteName:
      'Websites for small business, email support, and fullstack engineering | grouch.dev',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId="G-6BK8V3W198" />
      )}
    </html>
  )
}
