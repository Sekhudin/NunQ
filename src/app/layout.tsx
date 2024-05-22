import RootLayout from 'components/shared/root.layout';
import { withMetadata } from 'packages/utils/metadata';
import { PUBLIC_APP } from 'configs/env.config';
import 'styles/globals.css';
import 'styles/docs.css';

export const metadata = withMetadata({
  title: `${PUBLIC_APP.name} - Modern muslim app`,
  description: 'Modern muslim app',
});

export default RootLayout;
