from random import randint
from string import capwords


def read_file(file):
    
    with open(file, 'r') as f:
        lines = f.readlines()
    return [line.strip() for line in lines]

def ask_name():
    
    player_name = input('Please enter your name.\n')
    print(f'***Welcome to the Famous Places and Countries game, {player_name}!***')
    return player_name

def handle_quit(user_input, score, questions_answered_count):
    
    if user_input.lower() == 'y':
        return
    elif user_input.lower() == 'n':
        print(f'Your score is {score} out of {questions_answered_count}')
        quit()
    else:
        play = input('Please enter y or n.\n')
        handle_quit(play, score, questions_answered_count)

def generate_rand_int(data, upper_bound):
    
    random_index = randint(0, upper_bound - 1)
    if random_index in data:
        return generate_rand_int(data, upper_bound)
    return random_index

def play_game():
    
    places_list = read_file('places.txt')
    countries_list = read_file('countries.txt')

    player_score = 0
    question_answered_indexes = []

    ask_name()

    while True:
        random_index = generate_rand_int(question_answered_indexes, len(places_list))
        place = places_list[random_index]
        country_index = places_list.index(place)
        print(f'In which country is the famous place {place} located?')

        def validate_response():
            while True:
                response = input('Please enter country name. For example, France, Great Britain.\n')
                answer = capwords(response)
                try:
                    if answer.isdigit():
                        raise TypeError('You entered a number!')
                    elif any(str.isdigit(i) for i in answer):
                        raise TypeError('You entered a name with a number!')
                    else:
                        return answer
                except TypeError as e:
                    print(f'Invalid input. {e}')

        player_answer = validate_response()

        question_answered_indexes.append(country_index)

        if countries_list[country_index] == player_answer:
            country = countries_list[country_index]
            print(f'The famous place {place} is located in: {country}')
            print('Well done!')
            player_score += 1
        else:
            print('You missed this time')
            print('Hint: Next time check your spelling')

        if len(question_answered_indexes) == len(places_list):
            question_count = len(question_answered_indexes)
            print(f'Your score is {player_score} out of {question_count}')
            play = input('Game ended, press y to start again or n to quit:\n')
            handle_quit(play, player_score, len(question_answered_indexes))
            player_score = 0
            question_answered_indexes.clear()
        else:
            play = input('To continue playing enter: y or n to quit\n')
            handle_quit(play, player_score, len(question_answered_indexes))

play_game()
