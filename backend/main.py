from flask import Flask, render_template, request
import os
import random
from flask import json, url_for, jsonify, request, make_response
from data_processing.prep_modelv2 import getrandomnames, collabfiltering
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app, supports_credentials=True)

movies_df = pd.read_csv('data_files/movies.csv', nrows=190000)
random_movies_df = pd.read_csv('data_files/movies.csv')
ratings_df = pd.read_csv('data_files/ratings.csv')
movies_df['year'] = movies_df.title.str.extract('(\(\d\d\d\d\))', expand=False)
movies_df['year'] = movies_df.year.str.extract('(\d\d\d\d)', expand=False)
# Removing the years from the 'title' column
movies_df['title'] = movies_df.title.str.replace('(\(\d\d\d\d\))', '')
# Applying the strip function to get rid of any ending whitespace characters that may have appeared
movies_df['title'] = movies_df['title'].apply(lambda x: x.strip())
# Dropping the genres column
# movies_df = movies_df.drop('genres', 1)
# Drop removes a specified row or column from a dataframe
# ratings_df = ratings_df.drop('timestamp', 1)


@app.route('/')
def index():
    return 'working'


@app.route('/getrandom')
def getrandommovies():
    try:
        args = request.args
        nummoviees = int(args['count'])
        ids = getrandomnames(nummoviees, random_movies_df)
        response= make_response(jsonify(ids=ids))
    except Exception as e:
        response= make_response(
            jsonify(error='an error occured in getting response'), 500)
    return response


@app.route('/getrecomcollab', methods=['POST'])
def getrecomcollab():
    usrinput = request.get_json()
    try:
        recomresponse= collabfiltering(usrinput, movies_df, ratings_df)
        response = make_response(jsonify(recomresponse))
    except Exception as e:
        response= make_response(
            jsonify(error='an error occured in getting response'), 500)
    return response


if __name__ == '__main__':
    appPort = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=appPort)
