
import { use } from 'passport';
import * as local from 'passport-local';
import { user } from '../../db';

use('user-local', new local.Strategy({
    usernameField: 'username',
    passwordField: 'password'
}, function(username: string, password: string, done) {
    user.login({username, password})
    .then(function(result) {
        done(null, result);
    })
    .catch(done);
}));

