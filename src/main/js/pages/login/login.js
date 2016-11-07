app.component('login', {
    controller: function () {
        this.loginOnServer = function () {
            console.log('login');
            this.message = 'login done';
        };
    },
    templateUrl: '/templates/login.template.html'
});
