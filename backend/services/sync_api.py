from models.pokemon import PokemonModel

import requests
import json

class SyncPokemonDataBase:

    def __init__(self):
        self.url = 'https://pokeapi.co/api/v2/pokemon'
        self.url_detail = 'https://pokeapi.co/api/v2/pokemon-species'

    def start(self):
        try:
            response = requests.get(f'{self.url}')
            data = json.loads(response.text)
            count = data['count']

            for i in range(count):
                response = requests.get(f'{self.url}/{i+1}')
                data = json.loads(response.text)
                response = requests.get(f'{self.url_detail}/{i+1}')
                data_details = json.loads(response.text)
                pokemon = PokemonModel.get_by_name(data['name']) if PokemonModel.get_by_name(data['name']) else PokemonModel()

                pokemon.name = data['name']
                pokemon.front_default = data['sprites']['front_default']
                pokemon.flavor_text_entries = data_details['flavor_text_entries'][1]["flavor_text"]
                pokemon.save()

            return 'Synchronized successfully!'
        except Exception as e:
            return f'Sync error: {e}'
