var movies = require('../controllers/movies.js')

module.exports = function(app){
    app.get('/api/movies', movies.index);

    app.get('/api/movies/:id', movies.show);

    app.post('/api/movies', movies.create);

    app.put('/api/movies/:id', movies.update);

    app.put('/api/movies/editreview/:id', movies.updateReview);

    app.delete('/api/movies/:id', movies.destroy);
}
