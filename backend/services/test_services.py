import pytest

from .utils import mask_response
from .utils import select_english_language

def test_mask_response():
    assert mask_response('generation-xxxx') == 'Generation XXXX'
    assert mask_response('pikachu-zikitrina') == 'Pikachu zikitrina'
    assert mask_response(None) == '-- --'

def test_select_english_language():
    flavor_text_entries = [
        {
            "language": {
                "name": "zh-Hans",
                "url": "https://pokeapi.co/api/v2/language/12/"
            },
            "text": "必定能捉到野生宝可梦的，\n性能最好的球。",
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "language": {
                "name": "ja",
                "url": "https://pokeapi.co/api/v2/language/11/"
            },
            "text": "野生の　ポケモンを　必ず\n捕まえることが　できる\n最高　性能の　ボール。",
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "language": {
                "name": "en",
                "url": "https://pokeapi.co/api/v2/language/9/"
            },
            "text": "The best Poké Ball with the ultimate level of\nperformance. With it, you will catch any wild\nPokémon without fail.",
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "language": {
                "name": "it",
                "url": "https://pokeapi.co/api/v2/language/8/"
            },
            "text": "La Poké Ball dalle prestazioni migliori: cattura\nqualsiasi Pokémon selvatico senza mai fallire.",
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "language": {
                "name": "es",
                "url": "https://pokeapi.co/api/v2/language/7/"
            },
            "text": "La Poké Ball definitiva. Atrapa cualquier Pokémon\nsalvaje y no falla nunca.",
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "language": {
                "name": "de",
                "url": "https://pokeapi.co/api/v2/language/6/"
            },
            "text": "Der beste Ball! Damit fängst du garantiert jedes\nwilde Pokémon.",
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        },
        {
            "language": {
                "name": "fr",
                "url": "https://pokeapi.co/api/v2/language/5/"
            },
            "text": "Assurément la Ball la plus performante.\nElle permet de capturer à coup sûr un Pokémon\nsauvage.",
            "version_group": {
                "name": "ultra-sun-ultra-moon",
                "url": "https://pokeapi.co/api/v2/version-group/18/"
            }
        }]

    assert select_english_language(flavor_text_entries)['text'] == "The best Poké Ball with the ultimate level of\nperformance. With it, you will catch any wild\nPokémon without fail."
    assert select_english_language(flavor_text_entries)['language']['name'] == "en"
