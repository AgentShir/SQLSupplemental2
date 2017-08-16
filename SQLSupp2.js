-- Get the average rating for a movie
SELECT
    AVG(rating)
FROM
    movies.ratings;

-- Get the total ratings for a movie
SELECT
    *
FROM
    movies.movies
WHERE
    title LIKE '%Waiting To Exhale%';

-- Get the total movies for a genre
SELECT
    COUNT(*)
FROM
    movies.movies
WHERE
    movies.genres = 'Comedy';

-- Get the average rating for a user
SELECT
    COUNT(rating)
FROM
    movies.ratings
WHERE
    movieid = 4;

-- Find the user with the highest average rating
SELECT r.userid, AVG(rating) AS avg_rating, COUNT(movieid) AS amount_reviews
FROM movies.ratings r
GROUP BY r.userid
ORDER BY avg_rating DESC;

-- Find the user with the highest average rating with more than 50 reviews
SELECT r.userid, AVG(rating) AS avg_rating, COUNT(movieid) AS amount_reviews
FROM movies.ratings r
GROUP BY r.userid
HAVING amount_reviews > 50
ORDER BY avg_rating DESC, amount_reviews DESC
LIMIT 1;

-- Find the movies with an average rating over 4
SELECT m.movieid, m.title, AVG(r.rating) AS 'Rating'
FROM movies.movies m
JOIN ratings r ON m.movieid = r.movieid
HAVING Rating > 4
ORDER BY Rating DESC;




-- For each genre find the total number of reviews as well as the average review sort by highest average review.
SELECT g.id, g.genres, COUNT(r.rating) AS 'Rating', AVG(r.rating) AS 'Avg_Rating'
FROM movies.movies m
JOIN ratings r ON m.movieid = r.movieid
JOIN movie_genre mg ON m.movieid = mg.movieid
JOIN genre g ON mg.genre_id = g.id
GROUP BY g.id ORDER BY Avg_Rating DESC;


-- Find all comedies
SELECT *
FROM
WHERE genre LIKE '%Comedy%'
-- Find all comedies in the year 2000
-- Find any movies that are about death and are a comedy
-- Find any movies from either 2001 or 2002 with a title containing super



   
