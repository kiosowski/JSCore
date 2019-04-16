$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

        this.get('#/home', function (context) {
            isLoggedIn(context);

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/home/home.hbs');
            });
        });

        this.get('#/about', function (context) {
            isLoggedIn(context);

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs'
            }).then(function () {
                this.partial('./templates/about/about.hbs');
            });
        });

        this.get('#/login', function () {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                loginForm: './templates/login/loginForm.hbs'
            }).then(function () {
                this.partial('./templates/login/loginPage.hbs');
            });
        });

        this.post('#/login', function (context) {
            let that = this;
            auth.login(context.params.username, context.params.password)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo('Login successfully!');
                    that.redirect('#/home');
                });
        });

        this.get('#/logout', function () {
            let that = this;
            auth.logout()
                .then(function () {
                    sessionStorage.clear();
                    auth.showInfo('Logout successfully!');
                    that.redirect('#/home');
                });
        });

        this.get('#/register', function () {
            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                registerForm: './templates/register/registerForm.hbs',
            }).then(function () {
                this.partial('./templates/register/registerPage.hbs');
            });
        });

        this.post('#/register', function (context) {
            let that = this;
            auth.register(context.params.username, context.params.password, context.params.repearPassword)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo('Registered successfully!');
                    that.redirect('#/home');
                });
        });

        this.get('#/catalog', function (context) {
            isLoggedIn(context);

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                team: './templates/catalog/team.hbs'
            }).then(function () {
                let that = this;
                teamsService.loadTeams()
                    .then(function (teams) {
                        context.teams = teams;
                        context.hasNoTeam = teams;
                        that.partial('./templates/catalog/teamCatalog.hbs');
                    });
            });
        });

        this.get('#/create', function (context){
            isLoggedIn(context);

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                createForm: './templates/create/createForm.hbs'
            }).then(function () {
                this.partial('./templates/create/createPage.hbs');
            });
        });

        this.post('#/create', function(context){
            isLoggedIn(context);

            let that = this;
            teamsService.createTeam(context.params.name, context.params.comment)
                .then(function (info){
                    sessionStorage.setItem('teamId', info._id);
                    auth.showInfo(`Successfully created team ${info.name}!`);
                    that.redirect('#/catalog');
                });
        });

        this.get('#/catalog/:teamId', function(context) {
            isLoggedIn(context);

            context.isOnTeam = sessionStorage.getItem('teamId') == context.params.teamId.substr(1);
            const teamId = context.params.teamId.substr(1);
            sessionStorage.setItem('teamId', teamId);

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                teamMember: './templates/catalog/teamMember.hbs',
                teamControls: './templates/catalog/teamControls.hbs'
            }).then(function () {
                let that = this;
                let teamId = context.params.teamId.substr(1);
                teamsService.loadTeamDetails(teamId)
                    .then(function (teamInfo) {
                        context.isAuthor = sessionStorage.getItem('userId') === teamInfo._acl.creator;
                        context.name = teamInfo.name;
                        context.members = teamInfo.members;
                        context.comment = teamInfo.comment;
                        context.teamId = teamId;
                        that.partial('./templates/catalog/details.hbs');
                    });
            });
        });

        this.get('#/edit/:teamId', function (context) {
            isLoggedIn(context);
            const teamId = context.params.teamId.substr(1);

            this.loadPartials({
                header: './templates/common/header.hbs',
                footer: './templates/common/footer.hbs',
                editForm: './templates/edit/editForm.hbs',
            }).then(function () {
                let that = this;
                teamsService.loadTeamDetails(teamId)
                    .then(function (teamInfo) {
                        context.teamId = teamId;
                        context.name = teamInfo.name;
                        context.comment = teamInfo.comment;
                        that.partial('./templates/edit/editPage.hbs');
                    });
            });
        });

        this.post('#/edit/:teamId', function (context) {
            isLoggedIn(context);
            const teamId = context.params.teamId.substr(1);
            const name = context.params.name;
            const comment = context.params.comment;

            let that = this;
            teamsService.edit(teamId, name, comment)
                .then(function () {
                    auth.showInfo('Team was modified!');
                    that.redirect(`#/catalog/:${teamId}`);
                });
        });

        this.get('#/leave', function () {
            const teamId = sessionStorage.getItem('teamId');
            teamsService.leaveTeam();
            sessionStorage.setItem('teamId', '');
            this.redirect(`#/catalog/:${teamId}`);
        });

        this.get('#/join/:teamId', function (context) {
            const teamId = context.params.teamId.substr(1);
            teamsService.joinTeam(teamId);
            sessionStorage.setItem('teamId', teamId);
            this.redirect(`#/catalog/:${teamId}`);
        });
    });

    app.run('#/');
});

function isLoggedIn(context) {
    context.loggedIn = !!sessionStorage.getItem('authtoken');
    context.username = sessionStorage.getItem('username');
}