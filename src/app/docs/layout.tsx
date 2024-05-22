import Layout from 'modules/docs/templates/main.template';
import { withMetadata } from 'packages/utils/metadata';
import { PUBLIC_APP } from 'configs/env.config';

export const metadata = withMetadata({
  title: `${PUBLIC_APP.name} - Dokumentasi API`,
  description: 'Dokumentasi API untuk pengembang.',
});

export default Layout;
