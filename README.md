# auth-service

How to start?
npm install
npm start.

It will start the sample express server. It will run in port 9001

Sign up API

post: /api/v1/open-rounds/sign-up
TODO: Sign up with fire base and print user object in this API. Later we can store user details in our db

Sign In API
post: /api/v1/open-rounds/sign-in

Sign out:
Clear the session

middleware:
TODO:
Implement session validation logic. (validate the token with firebase)

reviews:
GET: /api/v1/open-rounds/reviews
You can access this API only if you have valid token. Otherwise you will get Unauthorized error.
