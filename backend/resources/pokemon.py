from flask import request, jsonify
from flask_restful import Resource
from models.bucket import BucketModel
from services.sync_api import SyncPokemonDataBase
from services.utils import mask_response
from datetime import date, datetime

import requests
import json


class PokemonResource(Resource):

    def _list_items(self, categorys, order_by):

        pokemon_response = requests.get('https://pokeapi.co/api/v2/pokemon')
        item_response = requests.get('https://pokeapi.co/api/v2/item')

        pokemon_data = json.loads(pokemon_response.text)
        item_data = json.loads(item_response.text)

        count = (pokemon_data['count'] - 1) + (item_data['count'] - 1)

        while BucketModel.count() != count:
            print('------>', pokemon_data['count'])
            print('------>', item_data['count'])
            print('------>', count)
            print(f'DB:{BucketModel.count()} PokeAPI: {count}')
            sync = SyncPokemonDataBase()
            print(sync.start())

        items = BucketModel.filter_by_params(categorys, order_by)

        return list(map(lambda item: {
            'id': item.id,
            'name': item.name,
            'display_name': item.display_name,
            'url': item.url,
            'category': item.category,
            'front_default': item.front_default,
            'flavor_text_entries': item.flavor_text_entries
        }, items))

    def pagination(self, page, data):
        response = []

        for i in range((page-1)*10, ((page-1)*10)+10):
            response.append(data[i])

        return response

    def get(self):
        categorys = []
        order_by = 'name'

        try:
            item = request.get_json() if request.get_json() else request.args
            item = json.loads(item['filters'])

            if item['pokemons']:
                categorys.append('pokemon')
            if item['items']:
                categorys.append('item')
            if item['order_by']:
                order_by = item['order_by']

            return self.pagination(item['page'], self._list_items(categorys, order_by))
        except Exception as e:
            return f"{e}", 500


class PokemonDetailResource(Resource):
    def _get_item(self, id):
        item = BucketModel.get_by_id(id)

        if item is None:
            return {'message': 'Pokemon/Item not found'}, 404

        details = json.loads(item.details)

        if item.category == 'pokemon':
            return {
                'id': item.id,
                'name': item.name,
                'display_name': item.display_name,
                'url': item.url,
                'category': item.category,
                'front_default': item.front_default,
                'flavor_text_entries': item.flavor_text_entries,
                'height': item.height,
                'weight': item.weight,
                'abilities': [details['abilities'][i]['ability']['name'] for i in range(len(details['abilities']))],
                'types': details['types'],
                'sprites': details['sprites'],
                'moves': details['moves'],
                'base_experience': details['base_experience'],
                'shape': mask_response(details['shape']),
                'egg_groups': details['egg_groups'],
                'color': mask_response(details['color']),
                'generation': mask_response(details['generation']),
                'growth_rate': mask_response(details['growth_rate']),
                'habitat': mask_response(details['habitat']),
                'base_happiness': details['base_happiness'],
                'capture_rate': details['capture_rate']
                }

        return {
            'id': item.id,
            'name': item.name,
            'display_name': item.display_name,
            'url': item.url,
            'category': item.category,
            'front_default': item.front_default,
            'flavor_text_entries': item.flavor_text_entries,
            'item_category': mask_response(details['category']['name']),
            'cost': details['cost'],
            'effet': details['effect']
            }


    def get(self, id):
        try:
            return self._get_item(id)

        except Exception as e:
            return f"{e}", 500
