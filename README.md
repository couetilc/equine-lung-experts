# Equine Lung Experts Website

## Build Requirements

!! This project uses yarn !!

1. Set node.js version to 8 with `nvm use`
2. Create a `.env` file with variable `SKIP_PREFLIGHT_CHECK=true`

## Deployment

This project is hosted by an AWS S3 bucket [1] proxied by Cloudfront.

[1] equinelungexperts.com.s3.amazonaws.com

### To deploy:

1) run `yarn run build`

2) navigate to the AWS S3 bucket and delete all contents

3) upload the contents of ./client/react-app/build to the S3 bucket's root directory
