const handlers = {}

$(() => {
  const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');
    // home page routes
    this.get('/index.html', handlers.getHome);
    this.get('/', handlers.getHome);
    this.get('#/home', handlers.getHome);

    // user routes
    this.get('#/register', handlers.getRegister);
    this.get('#/login', handlers.getLogin);

    this.post('#/register', handlers.registerUser);
    this.post('#/login', handlers.loginUser);
    this.get('#/logout', handlers.logoutUser);

    // ADD YOUR ROUTES HERE
    this.get('#/add',handlers.getCreate);
    this.get('#/myMovies', handlers.getMyMovies);
    this.get('#/cinema',handlers.getAllMovies);
    this.get('#/buyTickets',handlers.buyTicket);
    this.get('#/details',handlers.detailsMovie);
    this.post('#/add',handlers.createMovie);

  });
  app.run();
});