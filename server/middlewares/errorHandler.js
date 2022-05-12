function errorHandler(err, req, res, next) {
  let status = null;
  let errMessage = null;

  switch (err.name) {
    case "SequelizeValidationError":
      status = 400;
      errMessage = err.errors.map((el) => {
        return el.message;
      });
      break;
    case "SequelizeUniqueConstraintError":
      if (err.original.constraint === "Users_email_key") {
        status = 409;
        errMessage = ["Email is already used by other users"];
        break;
      }
    case "login_badRequest":
      status = 400;
      errMessage = "Email/Password is required";
      break;
    case "unauthorized":
      status = 401;
      errMessage = "Invalid email or password";
      break;
    case "JsonWebTokenError":
      status = 401;
      errMessage = "error token";
      break;
    case "missingAccessToken":
      status = 401;
      errMessage = "Missing Access Token";
      break;
    case "forbidden":
      status = 403;
      errMessage = "You're limited access";
      break;
    case "notFound":
      status = 404;
      errMessage = "Data Not Found";
      break;
    default:
      status = 500;
      errMessage = "Internal Server Error";
      break;
  }
  res.status(status).json({
    success: false,
    err: errMessage,
  });
}

module.exports = errorHandler;
