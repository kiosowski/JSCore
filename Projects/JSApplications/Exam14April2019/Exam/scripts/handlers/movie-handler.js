handlers.getCreate = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    ctx.loadPartials({
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
    }).then(function () {
        this.partial('../../templates/movie/create.hbs');
    }).catch(function (err) {
        console.log(err);
    });
}
handlers.createMovie = function (ctx) {
    let data = {...ctx.params};
    movieService.createMovie(data).then(function (res) {
        notifications.showSuccess('Movie created successfully.');
        ctx.redirect('#/myMovies');
    }).catch(function (err) {
        notifications.showError(err.responseJSON.description);
    });
}
handlers.getMyMovies = function (ctx) {

    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    movieService.getAllMyMovies().then(function (res) {

        let userId = sessionStorage.getItem('id');
        res.forEach((movie) => movie.isCreator = movie._acl.creator === userId);

        ctx.movie = res;

        ctx.loadPartials({
            header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs',
            movie: '../templates/movie/movie.hbs'
        }).then(function () {
            this.partial('../../templates/movie/myMovies.hbs');
        })
    })
}
handlers.getAllMovies = async function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');

    try {
        let movies = await movieService.getAllMovies();
        let userId = sessionStorage.getItem('id');
        movies.forEach((movie) => movie.isCreator = movie._acl.creator === userId);

        ctx.movies = movies;

        ctx.loadPartials({
            header: '../templates/common/header.hbs',
            footer: '../templates/common/footer.hbs',
            movie: '../templates/movie/cinemaMovie.hbs'
        }).then(function () {
            this.partial('../templates/movie/allMovies.hbs');
        }).catch(function (err) {
            console.log(err);
        });
    } catch (e) {
        console.log(e);
    }
}

handlers.detailsMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    const movieId = ctx.params.movieId.substr(1);

    this.loadPartials({
        header: '../templates/common/header.hbs',
        footer: '../templates/common/footer.hbs'
    }).then(function () {
        let that = this;
        movieService.loadMovieDetails(movieId)
            .then(function (movieInfo) {
                ctx.movieId = movieId;
                ctx.title = movieInfo.title;
                ctx.imageURL = movieInfo.imageURL;
                ctx.description = movieInfo.description;
                
                ctx.tickets = movieInfo.tickets;

                that.partial('../templates/movie/details.hbs');
            });
    });
}

handlers.buyTicket = function (ctx) {
    let movieId = ctx.params.movieId.substr(1);
    movieService.loadMovies()
        .then(function (movies) {
            let movie = movies.filter(movie => movie._id === movieId)[0];
            movieService.edit(movieId, movie.title, movie.imageURL, movie.description,movie.genres, Number(movie.tickets) -1).then(function () {
                window.history.back();
            });
        });
}

handlers.deleteMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    const movieId = ctx.params.movieId.substr(1);

    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        let that = this;
        movieService.loadMovieDetails(movieId)
            .then(function (movieInfo) {
                ctx.movieId = movieId;
                ctx.title = movieInfo.title;
                ctx.imageURL = movieInfo.imageURL;
                ctx.description = movieInfo.description;
                ctx.genres = movieInfo.genres;

                that.partial('./templates/movie/deleteMovie.hbs');
            });
    });
}

handlers.editMovie = function (ctx) {
    ctx.isAuth = userService.isAuth();
    ctx.username = sessionStorage.getItem('username');
    const movieId = ctx.params.movieId.substr(1);

    this.loadPartials({
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    }).then(function () {
        let that = this;
        movieService.loadMovieDetails(movieId)
            .then(function (movieInfo) {
                ctx.movieId = movieId;
                ctx.title = movieInfo.title;
                ctx.imageURL = movieInfo.imageURL;
                ctx.description = movieInfo.description;
                ctx.genres = movieInfo.genres;

                that.partial('./templates/movie/editMovie.hbs');
            });
    });
}

handlers.postEditMovie = function (ctx) {
    let movieId = ctx.params.movieId.substr(1);
    let description = ctx.params.description;

    let that = this;
    movieService.loadMovies()
        .then(function (movies) {
            let movie = movies.filter(movie => movie._id === movieId)[0];
            movieService.editMovie(movieId, movie.title, movie.imageURL,movie.description,movie.genres,movie.tickets)
                .then(function () {
                    notifications.showSuccess("Updated successfully!");
                    that.redirect(`#/allMovies`);
                });
        });
}



