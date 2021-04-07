import Link from './Link';

const logoMini = '/logo-breath-mini-110w.png';
const logoSmall = '/logo-breath-small-360w.png';
const logoMedium = '/logo-breath-main-480w.png';

export default function Header() {
  return (
    <header>
      <Link href='/'>
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
