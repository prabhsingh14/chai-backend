class ApiError extends Error {
    constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
) {
    super(); // Do not pass the `message` to the base Error class, to avoid it doen't get overwritten by the base Error.
    this.statusCode = statusCode;
    this.data = null;
    this.message = message; // Explicitly set the message property.
    this.success = false;
    this.errors = errors;

    if (stack) {
    this.stack = stack;
    } else {
    Error.captureStackTrace(this, this.constructor);
    }
}
}

export default ApiError;
