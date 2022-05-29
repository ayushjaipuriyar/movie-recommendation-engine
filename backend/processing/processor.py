import pandas as pd
import random
import requests
from math import sqrt


def getrandomnames(count, movies):
    randomids = []
    listmovies = []
    for v in range(count):
        val = random.randint(1, 51800)
        tmpyr = movies.loc[val]['title'][-5:-1]
        # print(int(tmpyr)<2000)
        while (val in randomids) or (int(tmpyr) < 2000):
            # print(tmpyr)
            val = random.randint(1, 5000)
            tmpyr = movies.loc[val]['title'][-5:-1]
        randomids.append(val)
    for val in randomids:
        tmpval = movies.loc[val]
        # print(tmpval)
        tmpdict = {}
        tmpdict['movieId'] = str(tmpval['movieId'])
        print(tmpval['title'])
        tmptitle = tmpval['title'][:-7]
        print(tmptitle)
        tmpdict['title'] = tmptitle
        tmpdict['actual'] = tmpval['title']
        # get movie image
        apiurl = 'http://www.omdbapi.com/?t='+tmptitle+'&apikey=3fe481cf'
        resp = requests.get(apiurl)
        if resp.json()['Response'] == 'False' or resp.json()['Poster'] == 'N/A':
            val1 = random.randint(1, 5000)
            tmpyr1 = movies.loc[val]['title'][-5:-1]
            while (val1 in randomids) or (int(tmpyr1) < 2000):
                val1 = random.randint(1, 5000)
                tmpyr1 = movies.loc[val1]['title'][-5:-1]
            randomids.append(val1)
            continue
        tmpdict['imageurl'] = resp.json()['Poster']
        listmovies.append(tmpdict)
    return listmovies


def collabfiltering(userinput, movies_df, ratings_df):
    userInput = userinput
    inputMovies = pd.DataFrame(userInput)

    inputId = movies_df[movies_df['title'].isin(inputMovies['title'].tolist())]
    inputMovies = pd.merge(inputId, inputMovies)
    inputMovies = inputMovies.drop('year', 1)
    userSubset = ratings_df[ratings_df['movieId'].isin(
        inputMovies['movieId'].tolist())]
    userSubsetGroup = userSubset.groupby(['userId'])

    userSubsetGroup = sorted(
        userSubsetGroup,  key=lambda x: len(x[1]), reverse=True)

    pearsonCorrelationDict = {}

    for name, group in userSubsetGroup:
        group = group.sort_values(by='movieId')
        inputMovies = inputMovies.sort_values(by='movieId')
        nRatings = len(group)
        temp_df = inputMovies[inputMovies['movieId'].isin(
            group['movieId'].tolist())]
        tempRatingList = temp_df['rating'].tolist()
        tempGroupList = group['rating'].tolist()
        Sxx = sum([i**2 for i in tempRatingList]) - \
            pow(sum(tempRatingList), 2)/float(nRatings)
        Syy = sum([i**2 for i in tempGroupList]) - \
            pow(sum(tempGroupList), 2)/float(nRatings)
        Sxy = sum(i*j for i, j in zip(tempRatingList, tempGroupList)) - \
            sum(tempRatingList)*sum(tempGroupList)/float(nRatings)
        if Sxx != 0 and Syy != 0:
            pearsonCorrelationDict[name] = Sxy/sqrt(Sxx*Syy)
        else:
            pearsonCorrelationDict[name] = 0

    pearsonDF = pd.DataFrame.from_dict(pearsonCorrelationDict, orient='index')
    pearsonDF.columns = ['similarityIndex']
    pearsonDF['userId'] = pearsonDF.index
    pearsonDF.index = range(len(pearsonDF))

    topUsers = pearsonDF.sort_values(
        by='similarityIndex', ascending=False)[0:50]

    topUsersRating = topUsers.merge(
        ratings_df, left_on='userId', right_on='userId', how='inner')

    topUsersRating['weightedRating'] = topUsersRating['similarityIndex'] * \
        topUsersRating['rating']

    # Applies a sum to the topUsers after grouping it up by userId
    tempTopUsersRating = topUsersRating.groupby(
        'movieId').sum()[['similarityIndex', 'weightedRating']]
    tempTopUsersRating.columns = ['sum_similarityIndex', 'sum_weightedRating']

    # Creates an empty dataframe
    recommendation_df = pd.DataFrame()
    # Now we take the weighted average
    recommendation_df['weighted average recommendation score'] = tempTopUsersRating['sum_weightedRating'] / \
        tempTopUsersRating['sum_similarityIndex']
    recommendation_df['movieId'] = tempTopUsersRating.index

    recommendation_df = recommendation_df.sort_values(
        by='weighted average recommendation score', ascending=False)
    recom_df_latest_tmp = movies_df.loc[movies_df['movieId'].isin(
        recommendation_df.head(100)['movieId'].tolist())]
    recom_df_latest_tmp['year'] = pd.to_numeric(
        recom_df_latest_tmp['year'])
    recom_df_latest = recom_df_latest_tmp.loc[recom_df_latest_tmp['year']
                                              >= 2010]
    if len(recom_df_latest.index) < 20:
        recom_df_latest = recom_df_latest_tmp.loc[recom_df_latest_tmp['year']
                                                  >= 1990]

    recom_df = movies_df.loc[movies_df['movieId'].isin(
        recom_df_latest.head(20)['movieId'].tolist())]
    recomresp = []
    countout = 0
    for idx, rw in recom_df.iterrows():
        if countout < 4:
            tmpdict = {}
            tmpdict['movieId'] = rw['movieId']
            tmpdict['title'] = rw['title']
            # get movie image
            apiurl = 'http://www.omdbapi.com/?t=' + \
                rw['title']+'&apikey=3fe481cf'
            resp = requests.get(apiurl)
            # print(resp.json())
            if resp.json()['Response'] == 'False':
                continue
            tmpdict['imageurl'] = resp.json()['Poster']
            tmpdict['year'] = rw['year']
            recomresp.append(tmpdict)
            countout += 1
    return recomresp
