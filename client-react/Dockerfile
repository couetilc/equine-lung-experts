FROM node:10-alpine

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# add node_modules to path
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install react-scripts -g

CMD ["npm", "start"]
