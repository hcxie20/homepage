var express = require("express")
var router = express.Router()
var Campground = require("../models/campground")

//Routes
router.get("/", function(req, res){
    res.render("landing")
})

router.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err)
        }else{
            res.render("campgrounds/index", {campgrounds, campgrounds})
        }
    })
})

router.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new")
})

router.get("/campgrounds/:id", function(req, res){
    Campgound.findById(req.params.id).populate("comments").exec(function(err, rst){
        if(err){
            console.log(err)
        }else{
            res.render("campgrounds/show", {campground: rst})
        }
    })
})

router.post("/campgrounds", function(req, res){
    var name = req.body.name
    var image = req.body.image
    var description = req.body.desc
    var new_camp = {name: name, image: image, description}
    Campground.create(new_camp, function(err, news){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds")
        }
    })
})

module.exports = router;