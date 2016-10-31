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
