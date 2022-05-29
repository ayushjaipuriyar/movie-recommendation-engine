from flask import Flask, request
import os
from os import path
from zipfile import ZipFile
import requests
from flask import jsonify, request, make_response
from processing.prep_modelv2 import getrandomnames, collabfiltering
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app, supports_credentials=True)

file = True
file_url = 'https://files.grouplens.org/datasets/movielens/ml-25m.zip'

while(file):
    if((path.exists('./data_files/ml-25m/movies.csv')) and (path.exists('./data_files/ml-25m/ratings.csv'))):
        print('Files found')
        file=False
    else:
        if(path.exists('./data_files/archive.zip')):
            print('Archive Found')
            with ZipFile('./data_files/archive.zip', 'r') as zipObj:
                zipObj.extractall('./data_files/')
                print('File has been unzipped')
            file=False
        else:
            file_obj = requests.get(file_url)
            with open('./data_files/archive.zip', 'wb') as local_file:
                local_file.write(file_obj.content)
            with ZipFile('./data_files/archive.zip', 'r') as zipObj:
                zipObj.extractall('./data_files/')
                print('File has been unzipped')
            file=False

movies = pd.read_csv('./data_files/ml-25m/movies.csv')
random_movies = pd.read_csv('./data_files/ml-25m/movies.csv')
ratings_df = pd.read_csv('./data_files/ml-25m/ratings.csv')
movies['year'] = movies.title.str.extract('(\(\d\d\d\d\))', expand=False)
movies['year'] = movies.year.str.extract('(\d\d\d\d)', expand=False)
movies['title'] = movies.title.str.replace('(\(\d\d\d\d\))', '')
movies['title'] = movies['title'].apply(lambda x: x.strip())

@app.route('/')
def index():
    return 'working'


@app.route('/getrandom')
def getrandommovies():
    try:
        args = request.args
        nummoviees = int(args['count'])
        ids = getrandomnames(nummoviees, random_movies)
        resp = make_response(jsonify(ids=ids))
    except Exception as e:
        resp = make_response(
            jsonify(error='an error occured in getting response'), 500)
    return resp


@app.route('/getrecomcollab', methods=['POST'])
def getrecomcollab():
    usrinput = request.get_json()
    try:
        recomresp = collabfiltering(usrinput, movies, ratings_df)
        resp = make_response(jsonify(recomresp))
    except Exception as e:
        resp = make_response(
            jsonify(error='an error occured in getting response'), 500)
    return resp

if __name__ == '__main__':
    appPort = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=appPort)
