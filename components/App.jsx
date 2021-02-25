import Head from 'next/head';
import Header from './Header';
import Menu from './Menu';
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
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
