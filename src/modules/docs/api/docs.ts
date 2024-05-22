import Docs, { noEnter } from 'packages/swagger';
import { API } from 'configs/links.config';

const docs = new Docs()
  .tag({
    name: 'Docs',
    description: noEnter('Berisi Endpoint yang berhubungan dengan dokumentasi.'),
  })
  .get(API.Docs, {
    tags: ['Docs'],
    schemes: ['http', 'https'],
    produces: ['application/json'],
    consumes: ['application/json'],
    description: noEnter(`Endpoint ini memungkinan pengguna untuk membaca dokumentasi secara online
    menggunakan Dokumentasi UI yang mendukung format OAS seperti
    [Swagger UI](https://petstore.swagger.io/) atau sejenisnya.`),
    responses: {
      '200': {
        description: 'Mengembalikan dokumentasi dalam format `JSON`.',
      },
      error: {
        description: 'Mengembalikan informasi error',
        schema: {
          $ref: '#/definitions/APIResponseError',
        },
      },
    },
  })
  .build();

export default docs;
