1) Create SQL Tables `movies` & `ratings`, and populate the CSV data into them.
2) Create an HTTP server with the following routes
a) GET /api/v1/longest-duration-movies
This route returns as JSON the top 10 movies with the longest runTime
The output should contain tconst, primaryTitle, runtimeMinutes & genres
Page 1 of 2
b) POST /api/v1/new-movie
This route takes JSON as input for new movie and saves it into the database
On successful save, it returns “success”
c) [BONUS QUESTION]
GET /api/v1/top-rated-movies
This route returns as JSON the movies with an averageRating > 6.0, in sorted
order by averageRating
The output should contain tconst, primaryTitle, genre & averageRating.
