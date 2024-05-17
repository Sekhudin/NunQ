import Docs, { noEnter, code } from 'packages/swagger';
import type Service from './quran.service';

type SurahInfo = (typeof Service)['surahList'][number];
type SurahByNumber = ReturnType<(typeof Service)['surahByNumber']>;
type SurahTranslations = SurahByNumber['translations'];
type SurahTafsirs = SurahByNumber['tafsirs'];
type SurahTafsirsID = SurahByNumber['tafsirs']['id'];

const docs = new Docs()
  .tag({
    name: 'Quran',
    description: 'Berisi Endpoint yang berhubungan dengan quran.',
  })
  .get('/quran', {
    tags: ['Quran'],
    schemes: ['http', 'https'],
    produces: ['application/json'],
    consumes: ['application/json'],
    description: noEnter(`Endpoint ini memungkinkan pengguna untuk
    mendapatkan detail infomasi surah dalam al-quran.`),
    responses: {
      '200': {
        description: 'Mengembalikan data berupa daftar surah.',
        schema: {
          $ref: '#/definitions/SurahList',
        },
      },
      error: {
        description: 'Mengembalikan informasi error',
        schema: {
          $ref: '#/definitions/APIResponseError',
        },
      },
    },
  })
  .get(`/quran/{surah_number}`, {
    tags: ['Quran'],
    schemes: ['http', 'https'],
    produces: ['application/json'],
    consumes: ['application/json'],
    description: noEnter(`Endpoint ini memungkinkan pengguna untuk mendapatkan
    resource surah tertentu berdasarkan nomor surah yang diberikan sepeti
    nomor surah, awal ayat, dan limit ayat.`),
    parameters: [
      {
        name: 'surah_number',
        type: 'numeric',
        in: 'path',
        required: false,
        description: noEnter(
          code('surah_number'),
          `adalah nomor urut surah dalam al-quran, berkisar antara 1 hingga 114.
          Selain itu maka akan mengembalikan error.`
        ),
      },
      {
        name: 'start',
        type: 'integer',
        in: 'query',
        required: false,
        description: noEnter(code('start'), `adalah batas awal ayat yang ditampilkan.`),
        default: 1,
      },
      {
        name: 'limit',
        type: 'integer',
        in: 'query',
        required: false,
        description: noEnter(code('limit'), `adalah banyak ayat yang ditampilkan.`),
        default: 10,
      },
    ],
    responses: {
      '200': {
        description: 'Mengembalikan data surah.',
        schema: {
          $ref: '#/definitions/SurahByNumber',
        },
      },
      error: {
        description: 'Mengembalikan informasi error',
        schema: {
          $ref: '#/definitions/APIResponseError',
        },
      },
    },
  })
  .define<Record<string, string>>('SurahRecord', {
    type: 'object',
    properties: {
      '[verse]': {
        type: 'string',
        example: `Bismillāhir-raḥmānir-raḥīm(i).`,
      },
    },
  })
  .define<SurahInfo>('SurahInfo', {
    type: 'object',
    properties: {
      number: {
        type: 'integer',
        example: '1 (surah ke-1)',
        minimum: 1,
        maximum: 114,
      },
      number_of_verse: {
        type: 'integer',
        example: `7 (jumlah ayat)`,
      },
      name: {
        type: 'string',
        example: `الفاتحة (arabic)`,
      },
      name_id: {
        type: 'string',
        example: `Al-Fatihah`,
      },
      name_latin: {
        type: 'string',
        example: `Al-Fātiḥah`,
      },
      name_trans_id: {
        type: 'string',
        example: `Pembuka`,
      },
      category: {
        type: 'string',
        enum: ['Makkiyah', 'Madaniyah'],
        example: 'Makkiyah',
      },
    },
  })
  .define<SurahTranslations>('SurahTranslations', {
    type: 'object',
    properties: {
      id: {
        $ref: '#/definitions/SurahRecord',
      },
    },
  })
  .define<SurahTafsirsID>('SurahTafsirsID', {
    type: 'object',
    properties: {
      kemenag: {
        $ref: '#/definitions/SurahRecord',
      },
    },
  })
  .define<SurahTafsirs>('SurahTafsirs', {
    type: 'object',
    properties: {
      id: {
        $ref: '#/definitions/SurahTafsirsID',
      },
    },
  })
  .define('SurahList', {
    type: 'array',
    items: {
      $ref: '#/definitions/SurahInfo',
    },
  })
  .define<SurahByNumber>('SurahByNumber', {
    type: 'object',
    properties: {
      number: {
        type: 'integer',
        example: '1 (surah ke-1)',
        minimum: 1,
        maximum: 114,
      },
      number_of_verse: {
        type: 'integer',
        example: `7 (jumlah ayat)`,
      },
      name: {
        type: 'string',
        example: `الفاتحة (arabic)`,
      },
      name_id: {
        type: 'string',
        example: `Al-Fatihah`,
      },
      name_latin: {
        type: 'string',
        example: `Al-Fātiḥah`,
      },
      name_trans_id: {
        type: 'string',
        example: `Pembuka`,
      },
      category: {
        type: 'string',
        enum: ['Makkiyah', 'Madaniyah'],
        example: 'Makkiyah',
      },
      hasNext: {
        type: 'boolean',
        example: false,
      },
      hasPrev: {
        type: 'boolean',
        example: false,
      },
      isMakkiyah: {
        type: 'boolean',
        example: true,
      },
      isMadaniyah: {
        type: 'boolean',
        example: false,
      },
      arabics: {
        $ref: '#/definitions/SurahRecord',
      },
      latins: {
        $ref: '#/definitions/SurahRecord',
      },
      translations: {
        $ref: '#/definitions/SurahTranslations',
      },
      tafsirs: {
        $ref: '#/definitions/SurahTafsirs',
      },
    },
  })
  .build();

export default docs;
