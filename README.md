# Equine Lung Experts Website

## Setup Development Environment

1. Install [`poetry`](https://python-poetry.org/)
- I recommend using [`pipx`](https://github.com/pypa/pipx) to install `poetry`.

2. Install [`direnv`](https://direnv.net/) and run `direnv allow .`

3. Install [Docker Desktop](https://docs.docker.com/desktop/)

### Background

The development environment is managed by a combination of `direnv` and Docker.

`direnv` sets local environment variables and shell parameters used by scripts
and the application. Docker provides an isolated and reproducible environment
for running the application. Conceptually, `direnv` configures the shell
environment and Docker configures the application environment.

### Python Dependencies

`poetry` manages the python version and project dependencies used by the django
application.

Any tools added to help with development and testing that are not used by the
application at runtime should be added to the "dev" poetry group like so:
`poetry add [package] --group dev`.

# TODOS

- create a django application in `app/`
- get dev server running and see if dev flow (edit files and refresh hpage) works
- create secrets.yml file and create envvar for values in `compose.yml`
- transfer over the equine lung experts classic site.

# REMINDERS

- For production build of Docker image, I'm going to install python
  dependencies using `poetry install --without dev` to avoid bundled test or
  development tools.
- For production build I will likely have another Dockerfile? Or a multi-stage
  build separate from the dev build? So both dev and prod in same Dockerfile
  but creating images out of different build steps?
  
