# Equine Lung Experts Website

This project powers [equinelungexperts.com](https://equinelungexperts.com),
using [Next.js](https://nextjs.org) as a front-end framework.

## Repository

The repository is hosted on Github at
[couetilc/equine-lung-experts](https://github.com/couetilc/equine-lung-experts).
The release branch is `master`.

## Infrastructure

The website files are stored on a AWS S3 Bucket "equinelungexperts.com" under
the folder prefix "www" and are proxied by AWS Cloudfront.

## Deployment

Steps to deploy:
```sh
# 1. Push your updates to `master` branch at https://github.com/couetilc/equine-lung-experts
git push origin master
# 2. Create and publish a new release from the `master` branch.
hub release create -t origin/master -m "YYYY-MM-DD" "YYYY-MM-DD"
```

Deployments are performed by a [Github Action](https://docs.github.com/en/actions)
triggered by publishing a release. The naming convention for releases is the
date "YYYY-MM-DD" of the release. Append a number to the release name if you
are performing more than one release in a day.

## Styling

Styling is added using global [SASS](https://sass-lang.com/) stylesheets,
stored in directory `styles` and imported in `pages/_app.jsx`
([Click for Next.js Docs](https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet))

TODO
- add links to those two papers (1st and third from email)
- Add links to social media (instagram, facebook, linkedin, twitter)
- consider Google Analytics, or other analytics for the website

TODO
- How should I manage image assets? next/image?
- automated deployments!!
- SASS design system, and clean up styling + components.
- consider snapshot testing whole site to make CI/CD seamless by merging Github
  PRs from dependabot automatically if all tests pass. (or auto deploy to a
  staging website and then approve to deploy to production domain?)
