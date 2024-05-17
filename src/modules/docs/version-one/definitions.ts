import Docs from 'packages/swagger';
import { HttpResponse } from 'types/api';

const baseDefinitions = new Docs()
  .define<HttpResponse>('APIResponseSuccess', {
    type: 'object',
    properties: {
      code: {
        type: 'integer',
        example: 200,
      },
      message: {
        type: 'string',
        example: 'OK',
      },
      data: {
        type: 'object',
        example: `{
          ...,
          "name": "john doe"
          ,...
        }`,
      },
      errors: {
        type: 'null',
        example: null,
      },
    },
  })
  .define<HttpResponse>('APIResponseError', {
    type: 'object',
    properties: {
      code: {
        type: 'integer',
        example: 500,
      },
      message: {
        type: 'string',
        example: 'Internal Server Error',
      },
      data: {
        type: 'null',
        example: null,
      },
      errors: {
        type: 'array',
        items: {
          type: 'string',
        },
        example: `["Internal Server Error"]`,
      },
    },
  })
  .build();

const definitions = baseDefinitions.definitions;
export default definitions;
