const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
var config = require("./../config/settings");

module.exports = passport => {
    var options = {
        jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: config.secret
    };
    passport.use(
        new JWTStrategy(options, (jwt_payload, callback) => {
            Model.Users.findOne(
                {
                    email_id: jwt_payload.email_id
                },
                (err, user) => {
                    if (user) {
                        delete user.password;
                        callback(null, user);
                    } else {
                        callback(err, false);
                    }
                }
            );
        })
    );
};
