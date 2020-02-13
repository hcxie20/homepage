var express = require("express")
    app = express()
    bodyParser = require("body-parser")
    mongoose = require("mongoose")
    passport = require("passport")
    LocalStrategy = require("passport-local")

    User = require("./models/user")
    Campgound = require("./models/campground")
    seedDB = require("./seed")

    commentRoutes = require("./routes/comments")
    campgroundRoutes = require("./routes/campgrounds")
    indexRoutes = require("./routes/index")

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect("mongodb://localhost/yelp_camp")

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname+"/public"))

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Secret",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(function(req, res, next){
    res.locals.currentUser = req.user
    next()
})

seedDB()

app.use(commentRoutes)
app.use(campgroundRoutes)
app.use(indexRoutes)

app.listen(3000, function(){
    console.log("YelpCamp Server Started")
})