var mongoose = require("mongoose")
    Campground = require("./models/campground")
    Comment = require("./models/comment")

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)

var data=[
    {name: "Joshua Tree", image: "https://www.nps.gov/common/uploads/grid_builder/camping/crop1_1/D7F5A4AC-E3AA-F2C8-D803576857EB0DDC.jpg?width=640&quality=90&mode=crop", description: "Labore occaecat cillum enim nulla dolor cillum nostrud voluptate ex magna. Exercitation velit anim fugiat aliqua ex aliquip in et cupidatat laboris nulla consectetur non. Occaecat minim occaecat officia ea aute. Commodo ut est non officia irure esse eiusmod enim culpa consequat ipsum adipisicing dolor."},
    {name: "Petrified Forest", image: "https://www.nps.gov/common/uploads/grid_builder/camping/crop1_1/D7B0CF99-B4F6-FFB6-137923EDF139B06A.jpg?width=640&quality=90&mode=crop", description: "Labore occaecat cillum enim nulla dolor cillum nostrud voluptate ex magna. Exercitation velit anim fugiat aliqua ex aliquip in et cupidatat laboris nulla consectetur non. Occaecat minim occaecat officia ea aute. Commodo ut est non officia irure esse eiusmod enim culpa consequat ipsum adipisicing dolor."},
    {name: "Yellowstone", image: "https://www.nps.gov/common/uploads/grid_builder/camping/crop1_1/D836EA90-0510-6847-C6C477CD35DC8C89.jpg?width=640&quality=90&mode=crop", description: "Labore occaecat cillum enim nulla dolor cillum nostrud voluptate ex magna. Exercitation velit anim fugiat aliqua ex aliquip in et cupidatat laboris nulla consectetur non. Occaecat minim occaecat officia ea aute. Commodo ut est non officia irure esse eiusmod enim culpa consequat ipsum adipisicing dolor."},
    {name: "Southeast Alaskan Wilderness", image: "https://www.nps.gov/common/uploads/grid_builder/glba/crop16_9/3AD5B405-1DD8-B71B-0BF8C764F38F60F9.jpg?width=307&quality=90&mode=crop", description: "Labore occaecat cillum enim nulla dolor cillum nostrud voluptate ex magna. Exercitation velit anim fugiat aliqua ex aliquip in et cupidatat laboris nulla consectetur non. Occaecat minim occaecat officia ea aute. Commodo ut est non officia irure esse eiusmod enim culpa consequat ipsum adipisicing dolor."}
]

function seedDB(){
    // Remove all camps
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err)
        }else{
            console.log("Remove succeed")
            data.forEach(function(camp){
                Campground.create(camp, function(err, campground){
                    if(err){
                        console.log(err)
                    }else{
                        console.log("Added")
                        Comment.create({text:"Aliquip eiusmod dolor in reprehenderit duis consectetur cupidatat anim deserunt deserunt. Commodo id reprehenderit ullamco eiusmod voluptate quis ullamco incididunt mollit labore et consectetur. Nulla ex irure minim dolore eu aliquip ea. Incididunt amet laborum reprehenderit voluptate duis culpa. Cillum occaecat do anim mollit Lorem sit voluptate ad adipisicing. Sit non cupidatat anim ea in ex consectetur nulla id ex elit ea sunt enim.", author: "J"}, function(err, comment){
                            if(err){
                                console.log(err)
                            }else{
                                campground.comments.push(comment)
                                campground.save()
                                console.log("Comment saved")
                            }
                        })
                    }
                })
            })
        }
    })
}

module.exports = seedDB;