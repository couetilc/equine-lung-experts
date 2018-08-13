FROM node:10-alpine

ENV HOME /home/react-app/
RUN mkdir -p $HOME
WORKDIR $HOME

ENV PATH $HOME/node_modules/.bin:$PATH

COPY react-app/package.json $HOME
RUN npm install --silent

COPY react-app/ $HOME

EXPOSE 3000

CMD ["yarn", "start"]
