app.component('email', {
    controller: function () {
        this.email = '';
        this.validate = function () {
            var length = this.email.length;
            if (length > 0 && length < 6) {
                this.message = ' Please enter valid e-mail address';
            } else {
                this.message = '';
            }
        };
    },
    templateUrl: '/templates/email-input.template.html'
});
