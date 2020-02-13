var express = require("express")
var router = express.Router()
var Campground = require("../models/campground")

// Comments routes

router.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, camp){
        if(err){
            console.log(err)
        }else{
            res.render("comments/new", {campground: camp})
        }
    })
})

router.post("/campgrounds/:id/comments", isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err)
            redirect("/campgrounds")
        }else{
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err)
                }else{
                    campground.comments.push(comment)
                    campground.save()
                    res.redirect("/campgrounds/"+campground._id)
                }
            })
        }
    })
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }else{
        res.redirect("/login")
    }
}

module.exports = router