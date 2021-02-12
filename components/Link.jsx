/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import NextLink from 'next/link';

export default function Link(props) {
  const {
    href, as, passHref, prefetch, replace, scroll, shallow, locale, ...childProps
  } = props;
  const nextProps = {
    href, as, passHref, prefetch, replace, scroll, shallow, locale,
  };
  return (
    <NextLink {...nextProps}>
      <a {...childProps} />
    </NextLink>
  );
}