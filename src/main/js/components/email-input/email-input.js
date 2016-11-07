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
