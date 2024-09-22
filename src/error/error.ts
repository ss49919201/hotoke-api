class DomainError extends Error {
  constructor(message: string) {
    super(message);
  }
}

class InvalidParameterError extends Error {
  constructor(message: string) {
    super(message);
  }
}
