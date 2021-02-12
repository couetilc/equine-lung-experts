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
- How should I manage image assets? next/image?
- automated deployments!!
- SASS design system, and clean up styling + components.
