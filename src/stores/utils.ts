export const getUrlSearch = () => {
  return window.location.search.slice(1);
};

export const getCurrentUrl = () => {
  const wd = window;
  return wd.location.href.replace(wd.location.origin, '');
};
