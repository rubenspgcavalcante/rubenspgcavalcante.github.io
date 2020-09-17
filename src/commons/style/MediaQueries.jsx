const breakpoints = {
  mobileS: 480,
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
};

/**
 * Media query strings defined for each platform
 * @type {mobileS: string; mobile: string; tablet: string; desktop: string}
 */
const mq = Object.entries(breakpoints).reduce(
  (prev, [name, bp]) => ({ ...prev, [name]: `@media (min-width: ${bp}px)` }),
  {}
);

export default mq;
