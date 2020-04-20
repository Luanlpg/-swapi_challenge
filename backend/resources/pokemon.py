from flask import request, jsonify
from flask_restful import Resource
from models.pokemon import PokemonModel
from services.sync_api import SyncPokemonDataBase
from datetime import date, datetime

import requests
import json


class PokemonResource(Resource):

    def _list_pokemons(self):
        pokemons = PokemonModel.list_all_order_by_name()

        response = requests.get('https://pokeapi.co/api/v2/pokemon')
        data = json.loads(response.text)
        count = data['count']
        while len(pokemons) == 0:
            print(f'DB:{len(pokemons)} PokeAPI: {count}')
            sync = SyncPokemonDataBase()
            print(sync.start())
            pokemons = PokemonModel.list_all_order_by_name()

        return list(map(lambda pokemon: {
            'id': pokemon.id,
            'name': pokemon.name,
            'front_default': pokemon.front_default,
            'flavor_text_entries': pokemon.flavor_text_entries
        }, pokemons))


    def get(self):
        item = request.get_json() if request.get_json() else request.args
        print('------>', item)
        try:
            return self._list_pokemons()
        except Exception as e:
            return f"{e}", 500
