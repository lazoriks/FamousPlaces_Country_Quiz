from random import randint
from string import capwords

def read_file(file):
    '''
    The function reads the file containing
    the list of places or countries.
    '''
    with open(file, 'r') as f:
        lines = f.readlines()
    return [line.strip() for line in lines]

def ask_name():
    '''
    The function gets the name of the player and
    welcomes the player to the game.
    '''
    player_name = input('Please enter your name.\n')
    print(f'***Welcome to the Famous Places and Countries game, {player_name}!***')
    return player_name

def play_game():
    '''
    The function runs the game, asks the player a question,
    validates the response of the player and returns
    the score of the player.
    '''
    places_list = read_file('places.txt')
    countries_list = read_file('countries.txt')

    player_score = 0
    question_answered_indexes = []

    ask_name()

play_game()