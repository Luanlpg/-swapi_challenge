def mask_response(item):
    try:
        if not item:
            return '-- --'
        elif 'generation' in item:
            array = item.split('-')
            return f'{array[0].capitalize()} {array[1].upper()}'
        return item.replace('-', ' ').capitalize()
    except Exception as e:
        print(e)

def select_english_language(item):
    try:
        for i in item:
            if i['language']['name'] == 'en':
                return i
        return item[0]
    except Exception as e:
        print(e)
