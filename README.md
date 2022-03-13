# AUDIAL

Audial makes use of Spotify API and various other API to make an All-in-One Music Platform!

## What we learned?

    - Using Spotify API:
        a. Authentication
            For this we visit the sotify authorization
            page which then redirects us back to our
            app.

            This requires the spotify authorization url
            https://accounts.spotify.com/authorize
            Client_Id,
            Redirect_Uri,
            Scopes(Optional)

        b. After login to Spotify in the url we get a hash
           with information about access token,token type etc.

        c. Then we save the token and use it in our API
           requests.
