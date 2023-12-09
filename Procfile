release: python manage.py makemigrations && python manage.py migrate
web: gunicorn drf_api.wsgi
web: node_modules/serve -s build
