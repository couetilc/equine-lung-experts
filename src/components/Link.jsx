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
