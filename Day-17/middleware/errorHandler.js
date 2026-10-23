const errorHandler = (err, req, res, next) => {
    console.error(err);

    if (res.headersSent) {
        return next(err);
    }

    const candidateStatus = err.statusCode || err.status;
    const statusCode = Number.isInteger(candidateStatus)
        && candidateStatus >= 400
        && candidateStatus <= 599
        ? candidateStatus
        : 500;
    const message = statusCode < 500 ? err.message : 'Internal Server Error';

    return res.status(statusCode).json({
        success: false,
        message,
    });
};

module.exports = errorHandler;