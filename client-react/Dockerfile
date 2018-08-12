FROM node:10-alpine

# create user responsible for running app in order to avoid root running everything.
#   --user-group options creates eponymous group for user who is then added to it.
#   --create-home initializes a home directory for the user
#   --shell sets the default shell to /bin/false, a program which boots, returns false, then exits, logging the user out.
RUN useradd --user-group --create-home --shell /bin/false client-react
ENV HOME /home/client-react/
RUN chown -R client-react:client-react $HOME/*
USER client-react

# ensure create working directory
# RUN mkdir -p /home/client-react/app

# add node_modules to path
ENV PATH /home/client-react/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY --chown=client-react:client-react ./app/package.json $HOME/app/
# files are copied over as root so permissions must be updated.
WORKDIR /home/client-react/app
RUN yarn install

# copy over app files
COPY --chown=client-react:client-react ./app/ /home/client-react/app/

EXPOSE 3000

# Define environment variable
ENV SECRET inDevelopment

CMD ["yarn", "start"]
