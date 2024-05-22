import { NextResponse } from 'next/server';
import HttpError from 'packages/server/base/http-error';
import { Code, Message } from 'configs/response.config';
import type { HttpResponse, ApiHandler, ApiHandlerPlain } from 'types/api';

abstract class Controller {
  protected res = NextResponse;

  protected searchParam<T extends string | number>(req: Request, id: string, value?: T): string {
    const searchParams = new URL(req.url).searchParams;
    const query = searchParams.get(id);
    if (!query) {
      if (!value) return '';
      return value.toString();
    }
    return query;
  }

  protected sendJSON<T extends Record<string, any>>(
    data: HttpResponse<T, null>
  ): NextResponse<HttpResponse<T, null>> {
    return this.res.json(data, {
      status: data.code,
    });
  }

  protected sendPlain<T extends string | number | Record<string, any>>(
    data: T
  ): NextResponse<T> {
    return this.res.json(data, {
      status: Code.OK,
    });
  }

  protected sendOK<T extends Record<string, any>>(
    data: T,
    message?: string
  ): NextResponse<HttpResponse<T, null>> {
    return this.sendJSON({
      code: Code.OK,
      message: message || Message.OK,
      data,
      errors: null,
    });
  }

  protected sendCreated<T extends Record<string, any>>(
    data: T,
    message?: string
  ): NextResponse<HttpResponse<T, null>> {
    return this.sendJSON({
      code: Code.CREATED,
      message: message || Message.CREATED,
      data,
      errors: null,
    });
  }

  protected errorException<E extends string[]>(code: number, errors: E, message?: string) {
    return new HttpError(code, errors, message ?? 'HTTP errors has occured.');
  }

  protected unAuthorizedException<E extends string[]>(errors: E, message?: string) {
    return new HttpError(Code.UNAUTHORIZED, errors, message ?? Message.UNAUTHORIZED);
  }

  protected forbiddenException<E extends string[]>(errors: E, message?: string) {
    return new HttpError(Code.FORBIDDEN, errors, message ?? Message.FORBIDDEN);
  }

  protected badRequestException<E extends string[]>(errors: E, message?: string) {
    return new HttpError(Code.BAD_REQUEST, errors, message ?? Message.BAD_REQUEST);
  }

  protected notFoundException<E extends string[]>(errors: E, message?: string) {
    return new HttpError(Code.NOT_FOUND, errors, message ?? Message.NOT_FOUND);
  }

  protected internalServerErrorException<E extends string[]>(errors: E, message?: string) {
    return new HttpError(
      Code.INTERNAL_SERVER_ERROR,
      errors,
      message ?? Message.INTERNAL_SERVER_ERROR
    );
  }

  protected handleException(error: Error | unknown): NextResponse<HttpResponse<null, string[]>> {
    return HttpError.handle(error as Error);
  }
}

export type { ApiHandler, ApiHandlerPlain };
export default Controller;
