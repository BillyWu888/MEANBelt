var Movie = require('../models/movie');

module.exports = {
    index: function(req, res){
        // console.log('Server Side: getting movies');
        Movie.find({}, function(err,movies){
            res.json({'errors': err, data: movies})
        })
    },
    show: function(req,res){
        // console.log('Server Side:', req.params.id)
        Movie.findOne({_id: req.params.id}, function(err,movie){
            res.json({data: movie})
        })
    },
    create: function(req,res){
        console.log('Server Side:', req.body);
        var movie = new Movie({
            title: req.body.title,
            reviewers: [req.body.reviewer],
            avgStars: req.body.stars,
            stars: [req.body.stars],
            reviews: [req.body.review],
            // reviewers: movie.reviewers.push(req.body.reviewer),
            // stars: movie.stars.push(req.body.stars),
            // reviews: movie.reviews.push(req.body.review),
        });
        console.log("after input", movie);
        movie.save(function(err) {
            if (err){
                res.json({errors: err.errors, message: "Could not save movie."})
            } else {
                Movie.find({}, function(err,movies){
                    if (err) {
                        err = err.errors;
                    }
                    res.json({movies: movies, errors: err}) 
                })
            }
        })
    },
    update: function(req,res){
        console.log('update movie', req.body)
        Movie.findOne({_id: req.params.id}, function(err,movie){
            movie.reviewers.push(req.body.reviewer);
            movie.stars.push(req.body.stars);
            var sum = 0;
            for (var i = 0; i <= movie.stars.length - 1; i++){
                sum += movie.stars[i];
                console.log('sum:', sum);
            }
            console.log('#####',movie);
            console.log('*****Stars Length:', movie.stars.length)
            console.log('=====Avg Stars:', (sum/movie.stars.length));
            movie.avgStars = (sum/movie.stars.length);
            movie.reviews.push(req.body.review);
            movie.markModified('avgStars');
            movie.save(function (err){
                if(err){
                    console.log(err);
                    res.json({'error': err.errors})
                } else {
                    res.json({data: movie, err: err})
                }
            })
        })
    },
    updateReview: function(req,res){
        console.log('update movie', req.body)
        Movie.findOne({_id: req.params.id}, function(err,movie){
            movie.reviewers.splice(req.body.index, 1);
            movie.stars.splice(req.body.index, 1);
            movie.reviews.splice(req.body.index, 1);
            movie.save(function (err){
                if(err){
                    console.log(err);
                    res.json({'error': err.errors})
                } else {
                    res.json({data: movie, err: err})
                }
            })
        })
    },
    destroy: function(req,res){
        Movie.remove({_id: req.params.id}, function(err){
            // console.log(err);
            Movie.find({}, function(err,movies){
                res.json({data: movies, error: err})
            })        
        });
    }
};

