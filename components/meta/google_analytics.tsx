import Script from "next/script"

const GoogleAnalytics = () => {
  const render = process.env.NODE_ENV === 'production'

  return (
    render && (
      <>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6BK8V3W198" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6BK8V3W198');
          `}
        </Script>
      </>
    )
  )
}

export default GoogleAnalytics
