from dotenv import load_dotenv
from flask import Flask
from os import environ
from resources import initialize_resources


application = Flask(__name__)

# load de variáveis de ambiente
print('Loading environment variables from .env file')
load_dotenv('./environments/local.env')

# load das variaveis de ambiente dentro do flask
for item in environ.items():
    application.config[item[0]] = item[1]

# Starting RESTful endpoints
initialize_resources(application)

# Run application
if __name__ == '__main__':
    print('Initilizing application')
    application.run()
