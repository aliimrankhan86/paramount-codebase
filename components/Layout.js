import Head from 'next/head';
import Script from 'next/script';
import Footer from './Footer';
import Header from './Header';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Minicon Agency - Multipurpose Responsive HTML Site Template</title>
        <meta name="description" content="Minicon Agency - Multipurpose Responsive HTML Site Template" />
        <meta name="keywords" content="Creative, Agency, Multipurpose, Marketing, App, Development" />
        <meta name="author" content="Iconic Graphics" />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="57x57" href="/img/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/img/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/img/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/img/apple-touch-icon-144x144.png" />
      </Head>

      {loading && (
        <div id="loader_wrapper">
          <div className="loader"></div>
        </div>
      )}

      <Header />
      <main>{children}</main>
      <Footer />

      <Script src="/js/jquery-3.1.0.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" />
      <Script src="/js/modernizr.js" />
      <Script src="/js/isotope.pkgd.min.js" />
      <Script src="/js/jquery.inview.min.js" />
      <Script src="/js/jquery.waypoints.min.js" />
      <Script src="/js/jquery.counterup.js" />
      <Script src="/js/wow.min.js" />
      <Script src="/js/menu.js" />
      <Script src="/js/custom-scripts.js" />
      <Script src="/js/contact.js" />
      <Script id="wow-init" strategy="lazyOnload">
        {`new WOW().init();`}
      </Script>
      <Script src="/js/custom-map.js" />
      <Script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" strategy="lazyOnload" />
    </>
  );
} 