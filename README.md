# Movie-recommendation-engine

I have made a recommendation system using collaborative filtering method.

This filtration strategy is based on the combination of the user’s behavior and comparing and contrasting that with other users’ behavior in the database. The history of all users plays an important role in this algorithm. The main difference between content-based filtering and collaborative filtering that in the latter, the interaction of all users with the items influences the recommendation algorithm while for content-based filtering only the concerned user’s data is taken into account.
There are multiple ways to implement collaborative filtering but the main concept to be grasped is that in collaborative filtering multiple user’s data influences the outcome of the recommendation. and doesn’t depend on only one user’s data for modeling.

I have used flask for the backend api and ReactJs for the frontend

I have two endpoints on the api. One of them is used to get random movies which the user needs to rate , so that the algorithm can recommend movies.And the other is to send recommended movies to the front end
