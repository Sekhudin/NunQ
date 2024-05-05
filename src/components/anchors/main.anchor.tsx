import { NextLink } from 'packages/ui/next-link';
import { cn, OmitChildren, Props } from 'packages/utils/cn';
import * as config from 'configs/env.config';

const MainAnchor = ({ className, ...props }: Props<OmitChildren<typeof NextLink>>) => (
  <NextLink className={cn(`text-xl md:text-3xl rounded-md`, className)} href="/" {...props}>
    {config.APP_NAME}
  </NextLink>
);

export default MainAnchor;
