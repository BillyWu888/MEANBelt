var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MovieSchema = new Schema({
    title: {type: String, required: [true, 'Movie Title is required'], minlength: [3, 'Movie Title Must Be At Least 3 Characters Long.']},
    // reviewers: {type: [String], required: [true, 'Your Name is required'], minlength: 3},
    reviewers: {
        type: [String],
        validate: [(review) => review[0].length >= 3 && review[0].length <=10,'Your Name Must Be At Least 3 and Less Than 10 Characters']
    },
    stars: {type: [Number], required: [true, 'Star Rating is required']},
    avgStars: Number,
    reviews: {
        type: [String],
        validate: [(review) => review[0].length >= 3 && review[0].length <=10,'Your Review Must Be At Least 3 Less Than 10 Characters']
    },
}, {timestamps: true})
    
module.exports = mongoose.model('Movie', MovieSchema); 
