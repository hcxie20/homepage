var express = require("express")
var router = express.Router()
var passport = require("passport")
var User = require("../models/user")
// AUTH routes
router.get("/register", function(req, res){
    res.render("register")
})

router.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err)
            return res.render("register")
        }else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/campgrounds")
            })
        }
    })
})

//Login routes
router.get("/login", function(req, res){
    res.render("login")
})

router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}), function(req, res){

})

//Logout routes
router.get("/logout", function(req, res){
    req.logout()
    res.redirect("/campgrounds")
})



module.exports = router