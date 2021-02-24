import { SocialIcon } from 'react-social-icons';

export default function SocialTray(props) {
  return (
    <div className="social-tray" {...props} />
  );
}

export function Twitter(props) {
  return (
    <SocialIcon url="https://twitter.com/equineexperts" {...props} />
  );
}

export function Instagram(props) {
  return (
    <SocialIcon url="https://www.instagram.com/equine.lung.experts" {...props} />
  );
}

export function Facebook(props) {
  return (
    <SocialIcon url="https://facebook.com/equine.lung.experts" {...props} />
  );
}
