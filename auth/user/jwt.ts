
import { use } from 'passport';
import * as jwt from 'passport-jwt';
import { config } from '../../environments';


use('user-jwt', new jwt.Strategy({
    jwtFromRequest: jwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.JWT_SECRET
}, function(jwt_payload, done) {
    //
}));
