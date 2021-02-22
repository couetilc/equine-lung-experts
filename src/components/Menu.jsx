import { useState, useCallback, useEffect, useMemo } from 'react';
import Link from './Link';

export default function Menu({ children }) {
  const [desktop, setDesktop] = useState(true);
  useEffect(() => {
    const updateLayout = () => {
      const isDesktop = window.innerWidth > 760;
      if (desktop !== isDesktop) setDesktop(isDesktop);
    };
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [desktop]);
  const Layout = useMemo(() => desktop ? Desktop : Mobile, [desktop]);
  return (
    <Layout>
      <Item href="/#service-summary">Services</Item>
      <Item href="/#people-summary">About Us</Item>
      <Item href="/contact">Contact Us</Item>
      <Item href="/balfsample">Submit a Sample</Item>
      <Item href="/environmentalconsulting">Environmental Consulting</Item>
      <Item href="resources">Resources</Item>
      {children}
    </Layout>
  );
}

function Item({ href, children }) {
  return (
    <li className="nav-menu-item">
      <Link href={href}>{children}</Link>
    </li>
  );
}

function Desktop({ children }) {
  return (
    <ul>
      <li className="nav-menu-toggle">
        <Link className="home-icon home-icon-desktop" href='/' />
      </li>
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
            <Link className="home-icon home-icon-mobile" href='/' />
          </li>
          {children}
        </>
      }
    </ul>
  );
}
