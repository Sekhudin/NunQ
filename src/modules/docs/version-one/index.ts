import Docs, { noEnter } from 'packages/swagger';
import quranApi from 'modules/quran/api/docs';
import docsApi from 'modules/docs/api/docs';
import { PUBLIC_AUTHOR } from 'configs/env.config';
import { API } from 'configs/links.config';
import definitions from './definitions';

const docs = new Docs()
  .basePath(API.Base)
  .schemes('http', 'https')
  .info({
    version: '1.0',
    title: `Dokumentasi API`,
    description: noEnter(
      `Hai, selamat datang! Saat ini, kami menyediakan akses ke Quran, 
      jadi kamu bisa membaca dan mencari ayat-ayat suci dengan mudah. Ke depannya, 
      kami akan menambahkan artikel Islami, doa harian, dan banyak lagi. 
      Stay tuned untuk fitur-fitur keren lainnya!`
    ),
  })
  .contact({
    name: 'Author',
    email: PUBLIC_AUTHOR.email,
    url: PUBLIC_AUTHOR.webProfile,
  })
  .tags([...quranApi.tags, ...docsApi.tags])
  .paths({ ...quranApi.paths, ...docsApi.paths })
  .definitions({ ...definitions, ...quranApi.definitions, ...docsApi.definitions });

export default docs;
