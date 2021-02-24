import Head from 'next/head';
import Header from './Header';
import NavMobile from './NavMobile';
import Footer from './Footer';
import Analytics from './Analytics';

export default function App({ Component, pageProps }) {
  return (
    <div id="site-page">
      <Head>
        <title>Equine Lung Experts</title>
        <Analytics />
      </Head>
      <Header />
      <NavMobile />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
