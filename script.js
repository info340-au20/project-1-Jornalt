'use strict';

// TODO: Write authentication endpoint


// TODO: Create variables to store:
//       - user authentication id 
//       - create an array for short, medium and long term song api id's


// TODO : create boolean for login page, once user is authenticated (logged in) 
//        return true to .css file to allow login page to be lifted.


// TODO: Write short_term, long term, and medium term get endpoints for user's top songs
/*
GET https://api.spotify.com/v1/me/top/{type}
curl -X "GET" "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=15" 
    -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer "
*/


// TODO: Write function to call these endpoints over and over to populate arrays for songs


// TODO: Write function call each of the song attributes given:
//          - song attribute
//          - song api id
//          - return value (normalized for ease of use or..?)