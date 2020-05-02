const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

app.use(bodyParser());
app.use(cookieParser());

const cookieName = "JWT-TOKEN";
const ignorePaths = [
    "/api/v1/open-rounds/sign-up",
    "/api/v1/open-rounds/sign-in"
];

//app middleware 
app.use((req, res, next) => {
    if(ignorePaths.includes(req.url)) {
        //Here ignore sign up and sign in
        next()
    }
    else {
        var token = req.cookies[cookieName];
        var isTokenValid = false;
        //here implement the jwt token validation
        if(isTokenValid) {
            next()
        }
        else {
            return res.status(401).send("Unauthorized user");
        }
    }
});

app.post("/api/v1/open-rounds/sign-up", (req, res) => {
    //Sign up with firebase
    //Print user details here
    return res.send("signed up")
});

app.post("/api/v1/open-rounds/sign-in", (req, res) => {
    // set firebase token in cookie
    const cookieOptions = {
        maxAge: 900000, 
        httpOnly: true
    };
    const token = "sample jwt token";
    res.cookie(cookieName, token, cookieOptions);
    return res.send("signed in")
});

app.get("/api/v1/open-rounds/sign-out", (req, res) => {
    //Clear the cookie
    req.clearCookie(cookieName);
    return res.send("signed out")
});

app.get("/api/v1/open-rounds/reviews", () => {
    return res.send("reviews")
})

app.listen(9001, () => {
    console.log("Running in port 9001");
});