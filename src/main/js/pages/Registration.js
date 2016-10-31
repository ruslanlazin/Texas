app.component('registration', {
    controller: function () {
        this.registerOnServer = function () {
            console.log('connecting');
            this.message = 'registration done';
        };
    },
    templateUrl: '/templates/registration.template.html'
});
