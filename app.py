from flask import Flask, request, render_template_string
from random import randint
from string import capwords

app = Flask(__name__)

places_list = []
countries_list = []

def read_file(file):
    with open(file, 'r') as f:
        lines = f.readlines()
    return [line.strip() for line in lines]

def generate_rand_int(data, upper_bound):
    random_index = randint(0, upper_bound - 1)
    if random_index in data:
        return generate_rand_int(data, upper_bound)
    return random_index

@app.route('/')
def index():
    return render_template_string('''
        <h1>Welcome to the Famous Places and Countries game!</h1>
        <form action="/start" method="post">
            <label for="name">Please enter your name:</label>
            <input type="text" id="name" name="name">
            <input type="submit" value="Start Game">
        </form>
    ''')

@app.route('/start', methods=['POST'])
def start():
    global places_list, countries_list
    places_list = read_file('places.txt')
    countries_list = read_file('countries.txt')

    player_name = request.form['name']
    return render_template_string('''
        <h2>Welcome, {{name}}!</h2>
        <form action="/play" method="post">
            <input type="submit" value="Play">
        </form>
    ''', name=player_name)

@app.route('/play', methods=['POST'])
def play():
    global places_list, countries_list
    question_answered_indexes = []

    random_index = generate_rand_int(question_answered_indexes, len(places_list))
    place = places_list[random_index]
    country_index = places_list.index(place)
    question_answered_indexes.append(country_index)

    return render_template_string('''
        <h2>In which country is the famous place {{place}} located?</h2>
        <form action="/answer" method="post">
            <input type="hidden" name="index" value="{{index}}">
            <label for="answer">Please enter country name:</label>
            <input type="text" id="answer" name="answer">
            <input type="submit" value="Submit">
        </form>
    ''', place=place, index=country_index)

@app.route('/answer', methods=['POST'])
def answer():
    global places_list, countries_list
    index = int(request.form['index'])
    answer = capwords(request.form['answer'])

    if countries_list[index] == answer:
        result = 'Correct! Well done!'
    else:
        result = 'Incorrect! The correct answer was {}.'.format(countries_list[index])

    return render_template_string('''
        <h2>{{result}}</h2>
        <form action="/play" method="post">
            <input type="submit" value="Next Question">
        </form>
    ''', result=result)

if __name__ == '__main__':
    app.run(debug=True)
