FROM python:3

# from https://github.com/docker/awesome-compose/tree/master/official-documentation-samples/django/
ENV PYTHONDONTWRITEBYTECODE=1
# stops terminal buffering, otherwise container gets stuck printing out "Watching for file changes with StatReloader"
ENV PYTHONUNBUFFERED=1

WORKDIR /code

COPY django/Pipfile django/Pipfile.lock ./

RUN python -m pip install pipenv
RUN python -m pipenv install --system --deploy

COPY django/ .

CMD ["./manage.py", "runserver", "0.0.0.0:8000"]
