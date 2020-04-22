from models.bucket import BucketModel
from services.utils import select_english_language

import requests
import json

class SyncPokemonDataBase:

    def __init__(self):
        self.pokemon_url = 'https://pokeapi.co/api/v2/pokemon'
        self.pokemon_detail_url = 'https://pokeapi.co/api/v2/pokemon-species'
        self.item_url = 'https://pokeapi.co/api/v2/item'

    def syn_pokemons(self):
        try:
            pokemon_response = requests.get(f'{self.pokemon_url}/?limit=-1')
            pokemon_data = json.loads(pokemon_response.text)

            for i in pokemon_data['results']:
                pokemon = BucketModel.get_by_name(i['name']) if BucketModel.get_by_name(i['name']) else None
                if not pokemon:
                    response = requests.get(i['url'])

                    data = json.loads(response.text)
                    response = requests.get(data['species']['url'])
                    data_details = json.loads(response.text)

                    print(f'ADD POKEMON: {data["name"]}')

                    pokemon = BucketModel()
                    pokemon.name = data['name']
                    pokemon.url = i['url']
                    pokemon.category = 'pokemon'
                    pokemon.height = data['height']
                    pokemon.weight = data['weight']
                    pokemon.display_name = select_english_language(data_details['names'])['name']
                    pokemon.flavor_text_entries = select_english_language(data_details['flavor_text_entries'])['flavor_text']
                    pokemon.front_default = data['sprites']['front_default'] if data['sprites']['front_default'] else 'https://assets.pokemon.com/static2/_ui/img/favicon.ico'
                    pokemon.details = json.dumps({
                            'base_experience': data['base_experience'],
                            'types': data['types'],
                            'sprites': data['sprites'],
                            'moves': data['moves'],
                            'abilities': data['abilities'],
                            'shape': data_details['shape']['name'],
                            'egg_groups': [data_details['egg_groups'][i]['name'] for i in range(len(data_details['egg_groups']))],
                            'color': data_details['color']['name'],
                            'generation': data_details['generation']['name'],
                            'growth_rate': data_details['growth_rate']['name'],
                            'habitat': None if not data_details['habitat'] else data_details['habitat']['name'],
                            'base_happiness': data_details['base_happiness'],
                            'capture_rate': data_details['capture_rate']
                            })
                    pokemon.save()
        except Exception as e:
            print(e)

    def syn_items(self):
        try:
            item_response = requests.get(f'{self.item_url}/?limit=-1')
            item_data = json.loads(item_response.text)

            for i in item_data['results']:
                item = BucketModel.get_by_name(i['name']) if BucketModel.get_by_name(i['name']) else None
                if not item:
                    response = requests.get(i['url'])

                    data = json.loads(response.text)

                    print(f'ADD ITEM: {data["name"]}')

                    item = BucketModel()
                    item.name = data['name']
                    item.url = i['url']
                    item.category = 'item'
                    item.height = 666
                    item.weight = 666
                    item.display_name = select_english_language(data['names'])['name']
                    item.flavor_text_entries = select_english_language(data['flavor_text_entries'])['text']
                    item.front_default = data['sprites']['default'] if data['sprites']['default'] else 'https://assets.pokemon.com/static2/_ui/img/favicon.ico'
                    item.details = json.dumps({
                            'attributes': data['attributes'],
                            'category': data['category'],
                            'cost': data['cost'],
                            'effect': select_english_language(data['effect_entries'])['effect']
                            })
                    item.save()
        except Exception as e:
            print(e)

    def start(self):
        try:
            self.syn_pokemons()
            self.syn_items()
            return 'Synchronized successfully!'
        except Exception as e:
            return f'Sync error: {e}'
