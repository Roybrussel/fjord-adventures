const User = require("../models/user.model");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const passport = require("passport");

passport.serializeUser((loggedInUser, cb) => {
  cb(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, cb) => {
  User.findById(userIdFromSession, (err, userDocument) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, userDocument);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, next) => {
      User.findOne({
        email,
      })
        .then((user) => {
          if (!user) {
            return next(null, false, {
              errorMessage: "This email address has not been registered yet.",
            });
          }

          if (!bcrypt.compareSync(password, user.hashPass)) {
            return next(null, false, {
              errorMessage: "Please check you password.",
            });
          }

          next(null, user);
        })
        .catch((err) => next(err));
    }
  )
);

module.export = passport;
