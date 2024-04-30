enum Code {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

enum Message {
  OK = 'Ok',
  CREATED = 'Created',
  BAD_REQUEST = 'Bad Request',
  UNAUTHORIZED = 'Unuthorized',
  FORBIDDEN = 'Forbidden',
  NOT_FOUND = 'Not Found',
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
}

export { Code, Message };
