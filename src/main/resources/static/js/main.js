/**
 * @author Ruslan Lazin
 */
var app = angular.module('texas', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/register', {template: '<registration></registration>'})
        .when('/login', {template: '<login>'})
        .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);


});

app.component('email', {
    controller: function () {
        this.email = '';
        this.message = '';
        this.validate = function () {
            if (this.email.indexOf('@') < 1 || this.email.indexOf('.') < 1) {
                this.message = ' Please enter valid e-mail address';
            }else {
                this.message = '';
            }
        };
    },
    templateUrl: '/templates/email-input.template.html'
});

app.component('pass', {
    controller: function () {
        this.password = '';
        this.checkLength = function () {
            var length = this.password.length;
            if (length > 0 && length < 6) {
                this.message = ' Password must be more than 6 characters';
            } else if (length > 32) {
                this.message = ' Password must be less than 32 characters';
            } else {
                this.message = '';
            }
        };
    },
    templateUrl: '/templates/password-input.template.html'
});

app.component('username', {
    controller: function () {
        this.username = '';
        this.checkLength = function () {
            var length = this.username.length;
            if (length > 0 && length < 6) {
                this.message = ' Username must be more than 6 characters';
            } else if (length > 32) {
                this.message = ' Username must be less than 32 characters';
            } else {
                this.message = '';
            }
        };
    },
    templateUrl: '/templates/username-input.template.html'
});

app.component('login', {
    controller: function () {
        this.loginOnServer = function () {
            console.log('login');
            this.message = 'login done';
        };
    },
    templateUrl: '/templates/login.template.html'
});

app.component('registration', {
    controller: function () {
        this.registerOnServer = function () {
            console.log('connecting');
            this.message = 'registration done';
        };
    },
    templateUrl: '/templates/registration.template.html'
});
