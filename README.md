# Equine Lung Experts Website

This project uses [Next.js](https://nextjs.org).

## Deployment

This project is hosted by an AWS S3 bucket [1] proxied by Cloudfront.

[1] equinelungexperts.com.s3.amazonaws.com

### To deploy:

1) run `yarn run build`

2) navigate to the AWS S3 bucket and delete all contents

3) upload the contents of ./client/react-app/build to the S3 bucket's root directory

## Styling

Styling is added using global SASS stylesheets, stored in directory `styles`
and imported in `pages/_app.jsx`

TODO
- add links to those two papers (1st and third from email)
- remove other emails, keep equinelungexperts@gmail.com, cover it with CAPTCHA
- remove contact form.
- Add links to social media (instagram, facebook, linkedin, twitter)
- consider Google Analytics, or other analytics for the website

TODO
- How should I manage image assets? next/image?
- automated deployments!!
- SASS design system, and clean up styling + components.
- consider snapshot testing whole site to make CI/CD seamless by merging Github
  PRs from dependabot automatically if all tests pass. (or auto deploy to a
  staging website and then approve to deploy to production domain?)

SUMMARY OF THIS PROJECT SO I CAN TALK ABOUT IN INTERVIEW
- started as a create-react-app site using SASS and a basic design system.
  Deployed to S3 bucket fronted by Cloudfront CDN with API Gateway and Lambda + SNS for simple "Contact Me" Form.
- Transitioned to next.js, deployed to google cloud storage fronted by Google CDN
  email provided after solving captcha
