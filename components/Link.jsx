import NextLink from 'next/link';

export default function Link(props) {
  const {
    href, as, passHref, prefetch, replace, scroll, shallow, locale,
    children, ...anchorProps
  } = props;
  return (
    <NextLink
      href={href}
      as={as}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
    >
      <a {...anchorProps}>{children}</a>
    </NextLink>
  );
}
