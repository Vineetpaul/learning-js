// NEW: Centralized error-handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err);

  // If a response has already started, let Express handle the error.
  if (res.headersSent) {
    return next(err);
  }

  const candidate = Number(err.statusCode || err.status);
  const statusCode =
    candidate >= 400 && candidate <= 599 ? candidate : 500;

  const message =
    statusCode < 500
      ? err.message
      : "Internal server error";

  return res.status(statusCode).json({
    success: false,
    message
  });
};

module.exports = errorHandler;