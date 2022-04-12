function errorHandler(error, req, res, next) {
  console.log(error);
  return res.status(error.status || 500).json({
    error: {
      requestedURL: req.originalUrl,
      res: res.message,
      status: error.status,
      message: error.message || "Oops! Something went wrong",
    },
  });
}

module.exports = errorHandler;
