/* eslint-disable no-console */
import { z } from 'zod';
import { NextResponse } from 'next/server';
import { Code, Message } from 'configs/response.config';
import type { HttpResponse } from 'types/global';

class HttpError<T = any, E = string[]> extends Error {
  constructor(code: number, errors: E, message: string, payload?: T) {
    const responseError = { code, errors, message, payload };
    super(JSON.stringify(responseError));
    Object.setPrototypeOf(this, this.constructor.prototype);
  }

  public static exception(e: any, message?: string) {
    let errors: string[] = ['An unknown error in server has occured.'];
    if (e instanceof z.ZodError) {
      errors = e.issues.map((v) => v.message);
    }
    return new HttpError(Code.BAD_REQUEST, errors, message ?? Message.BAD_REQUEST);
  }

  public static handle(err: Error): NextResponse<HttpResponse<null, string[]>> {
    if (err instanceof this) {
      const error = JSON.parse(err.message);
      return NextResponse.json(
        { ...error, data: null },
        {
          status: error.code,
        }
      );
    }

    if (err?.message?.includes('Unexpected end of JSON input')) {
      const statusCode = Code.BAD_REQUEST;
      return NextResponse.json(
        {
          code: statusCode,
          message: Message.BAD_REQUEST,
          data: null,
          errors: ['Request body is required'],
        },
        {
          status: statusCode,
        }
      );
    }

    const statusCode = Code.INTERNAL_SERVER_ERROR;
    return NextResponse.json(
      {
        code: statusCode,
        message: Message.INTERNAL_SERVER_ERROR,
        data: null,
        errors: ['An unknown error in server has occured.'],
      },
      {
        status: statusCode,
      }
    );
  }
}

export default HttpError;
