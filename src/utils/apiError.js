class apiError extends Element {
  constructor(
    statusCode,
    message = "Somthing went wrong",
    error = [],
    stack = ""
  ) {
    super(message);
    ((this.statusCode = statusCode),
      (this.data = null),
      (this.error = error),
      (this.success = false),
      (this.message = message));

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { apiError };
