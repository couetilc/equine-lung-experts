import { useState, useCallback, useEffect, useMemo } from 'react';
import SocialTray, { Twitter, Instagram, Facebook } from './SocialTray';
import Link from './Link';

export default function Menu({ children }) {
  const [desktop, setDesktop] = useState(true);
  const updateLayout = useCallback(() => {
    if (typeof window !== 'undefined') setDesktop(window.innerWidth > 760);
  }, []);
  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [updateLayout]);
  const Layout = useMemo(() => desktop ? Desktop : Mobile, [desktop]);
  return (
    <nav id='menu-bar'>
      <Layout>
        {children}
      </Layout>
    </nav>
  );
}

function Links(props) {
  return (
    <>
      <li className="nav-menu-item">
        <Link href="/#service-summary" {...props}>
          Services
        </Link>
      </li>
      <li className="nav-menu-item">
        <Link href="/#people-summary" {...props}>
          About Us
        </Link>
      </li>
      <li className="nav-menu-item">
        <Link href="/contact" {...props}>
          Contact Us
        </Link>
      </li>
      <li className="nav-menu-item">
        <Link href="/balfsample" {...props}>
          Submit a Sample
        </Link>
      </li>
      <li className="nav-menu-item">
        <Link href="/environmentalconsulting" {...props}>
          Environmental Consulting
        </Link>
      </li>
      <li className="nav-menu-item">
        <Link href="/resources" {...props}>
          Resources
        </Link>
      </li>
      <li>
        <SocialTray>
          <Twitter />
          <Instagram />
          <Facebook />
        </SocialTray>
      </li>
    </>
  );
}

function Desktop({ children }) {
  return (
    <ul>
      <li className="nav-menu-toggle">
        <Link className="home-icon home-icon-desktop" href='/' />
      </li>
      <Links />
      {children}
    </ul>
  );
}

function Mobile({ children }) {
  const [clicked, setClicked] = useState(false);
  const toggle = useCallback(() => setClicked(!clicked), [clicked]);
  return (
    <ul>
      <li className="nav-menu-toggle-mobile">
        <Link
          href='#'
          className={`mobile-menu-toggle
            home-icon-${clicked ? 'close' : 'open' }`}
          onClick={toggle}
          />
      </li>
      { clicked &&
        <>
          <li className="nav-menu-toggle">
            <Link onClick={toggle} className="home-icon home-icon-mobile" href='/' />
          </li>
          <Links onClick={toggle} />
        </>
      }
      {children}
    </ul>
  );
}
