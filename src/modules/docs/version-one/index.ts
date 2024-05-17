import Docs, { noEnter } from 'packages/swagger';
import quranDocs from 'modules/quran/api/docs';
import { PUBLIC_AUTHOR, PUBLIC_APP } from 'configs/env.config';
import definitions from './definitions';

const docs = new Docs()
  .basePath('/api')
  .schemes('http', 'https')
  .info({
    version: '1.0',
    title: `${PUBLIC_APP.name} - Dokumentasi API`,
    description: noEnter(
      `API ini merupakan API aplikasi muslim yang menyediakan berbagai fitur dan konten Islami.
      Dengan API ini, pengguna dapat mengakses Al-Qur'an lengkap dengan terjemahan,
      kumpulan artikel Islami yang informatif, doa-doa harian untuk berbagai kebutuhan,
      serta tahlil untuk keperluan ibadah. API ini dirancang untuk memudahkan integrasi konten
      Islami ke dalam aplikasi Anda, memberikan akses yang cepat dan mudah ke sumber-sumber yang
      berharga bagi komunitas Muslim.`
    ),
  })
  .contact({
    name: 'Author',
    email: PUBLIC_AUTHOR.email,
    url: PUBLIC_AUTHOR.webProfile,
  })
  .tags([...quranDocs.tags])
  .paths({ ...quranDocs.paths })
  .definitions({ ...definitions, ...quranDocs.definitions });

export default docs;
