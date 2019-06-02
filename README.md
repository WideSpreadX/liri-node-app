# liri-node-app
Siri-like Homework Assignment


# What is Liri and What is Under the Hood

    Liri is a 'Siri' like program that is meant only to query song names and artists with the Spotify API, query upcoming concerts with the Bands In Town API and query movie information through the OMDB API.

    Liri will use Axios to get and post the data requested.

    Liri uses Moment npm for the time formatting with any dates or times used with Bands In Town.

    Finally, to keep Liri's API credentials cofindential, the UUID's and keys will be inside of the .env file which will not be visible to the public. 

# File Structure

    >Liri
        +keys.js
            -This file holds API access information in order for us to connect to one of our API's
        +liri.js
            -This file includes all logic to Liri.
        +package.json
            -Entry point for API communication

#Screenshots/Videos

    >Videos
        Google Drive:
            https://drive.google.com/file/d/1vUkfaavpOqYSh87O7wG8ZyVTDO51an2_/view?usp=sharing

# How to Use Liri
Syntax for all functions start with `node liri `
Look up a Song
    `spotify-this-song <song name here>`

    Step 1 - Call the Spotify case function with `spotify-this-song`

    Step 2 - Put a space after.

    Step 3 - <song name here> you can type the name of the song inside of the "<>" without the "<>"

    Step 4 - Hit Enter

    Step 5 - Look for your results in the log.txt file

Look up a Concert
    `concert-this <artist/band name here>`

    Step 1 - Call the Band is in Town case function with `concert-this`

    Step 2 - Put a space after.

    Step 3 - <artist/band name here> you can type the name of the artist/band inside of the "<>" without the "<>"

    Step 4 - Hit Enter

    Step 5 - Look for your results in the log.txt file

Look up a Movie
    `movie-this '<movie name here>'`

    Step 1 - Call the OMDB case function with `movie-this`

    Step 2 - Put a space after.

    Step 3 - <movie name here> you can type the name of the movie inside of the "<>" without the "<>"

    Step 4 - Hit Enter

    Step 5 - Look for your results in the log.txt file