/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import Header from './Header';
import NavMobile from './NavMobile';
import Footer from './Footer';

export default function App({ Component, pageProps }) {
  return (
    <div id="site-page">
      <Head><title>Equine Lung Experts</title></Head>
      <Header />
      <NavMobile />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
