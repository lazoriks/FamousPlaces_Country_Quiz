def play_game():
    '''
    The function runs the game, asks the player a question,
    validates the response of the player and returns
    the score of the player.
    '''
    places_list = read_file('places.txt')
    countries_list = read_file('countries.txt')


play_game()