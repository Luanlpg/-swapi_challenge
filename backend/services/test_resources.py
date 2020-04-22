import pytest
import requests

def test_get_list_pokemon():
    response = requests.get("http://localhost:5000/api/pokemon?filters=%7B%22order_by%22:1,%22page%22:2,%22pokemons%22:true,%22items%22:false%7D")
    assert response.status_code == 200
    assert len(response.data) == 10

def test_get_pokemon():
    response = requests.get("http://localhost:5000/api/pokemon/1")
    assert response.status_code == 200
