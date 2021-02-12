/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-quotes */
import Link from 'next/link';
import logoMini from '../assets/logo-breath-mini-110w.png';
import logoSmall from '../assets/logo-breath-small-360w.png';
import logoMedium from '../assets/logo-breath-main-480w.png';

export default function Header() {
  return (
    <header>
      <Link href='/home'>
        <picture>
          <source srcSet={logoMini} media="(max-width: 320px)" />
          <source srcSet={logoSmall} media="(max-width: 480px)" />
          <img
            className='header-logo-wordmark'
            src={logoMedium}
            alt='Logo for Equine Lung Experts'
          />
        </picture>
      </Link>
    </header>
  );
}
