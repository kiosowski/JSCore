const movieService = (() => {
    
    function createMovie (data) {
        return kinvey.post('appdata', 'movies', 'kinvey', data);
    }

    function getAllMovies () {
        return kinvey.get('appdata', 'movies', 'kinvey', '?query={}&sort={"likeCounter": -1}');
    }

    function getAllMyMovies () {
        return kinvey.get('appdata', 'movies', 'kinvey', `?query={"_acl.creator":"${sessionStorage.getItem('id')}"}`);
    }

    function removeMovie (id) {
        return kinvey.remove('appdata', `movies/${id}`, 'kinvey');
    }

    function getAMovie (id) {
        return kinvey.get('appdata', `movies/${id}`, 'kinvey');
    }

    function loadMovieDetails(id){
        return kinvey.get('appdata', 'movies/' + id, 'kinvey');
    }
    function loadMovies() {
        return kinvey.get('appdata', 'movies', 'kinvey');
    }
    function editMovie(movieId, title,imageURL, description, genres, availableTickets){
        let data = {
            title,
            imageURL,
            description,
            genres,
            availableTickets    
        };

        return kinvey.update('appdata', `movies/${id}` + movieId, 'kinvey', data);
    }

    function deleteMovie(movieId){
        return kinvey.remove('appdata', `movies//${id}` + movieId, 'kinvey');
    }
    return {
        createMovie,
        getAllMovies,
        getAllMyMovies,
        removeMovie,
        getAMovie,
        loadMovieDetails,
        deleteMovie,
        editMovie
        ,loadMovies
    }
})();