import * as config from 'configs/env.config';

const MainAnchor = () => (
  <a className="text-xl md:text-3xl rounded-md" href="/">
    {config.APP_NAME}
  </a>
);

export default MainAnchor;
