/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Header from './Header';
import NavMobile from './NavMobile';
import Footer from './Footer';

export default function App({ Component, pageProps }) {
  return (
    <div id="site-page">
      <Header />
      <NavMobile />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}