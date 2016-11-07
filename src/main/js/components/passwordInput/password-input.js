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
