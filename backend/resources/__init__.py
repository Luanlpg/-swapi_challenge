from datetime import datetime, timedelta
from enum import IntEnum
from flask import current_app, jsonify
from flask_restful import Api
from functools import wraps
from werkzeug.exceptions import HTTPException
from os import environ


def initialize_resources(application):
    api = Api(application)

    # Endpoints
    from resources.pokemon import PokemonResource
    from resources.pokemon import PokemonDetailResource

    api.add_resource(PokemonResource, '/api/pokemon')
    api.add_resource(PokemonDetailResource, '/api/pokemon/<int:id>')


class HttpCode(IntEnum):
    Ok = 200
    BadRequest = 400
    Unauthorized = 401
    Forbidden = 403
    NotFound = 404
