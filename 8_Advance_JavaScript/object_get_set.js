const User = {
    _email: 'test@example',
    _password : 'pas123',

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    }
}

const jatin = Object.create(User)

console.log(jatin.email);

