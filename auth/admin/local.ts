
import { use } from 'passport';
import * as local from 'passport-local';
import { admin } from '../../db';

use('admin-local', new local.Strategy({
    usernameField: 'username',
    passwordField: 'password'
}, function(username: string, password: string, done) {
    console.log(username, password);
    admin.login({username, password})
    .then(function(result) {
        console.log(result);
        done(null, result);
    })
    .catch(done);
}));

