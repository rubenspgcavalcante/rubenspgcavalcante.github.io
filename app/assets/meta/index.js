import favicon from './favicon.ico';
import { src } from './site-preview.png';
import { title, description } from './site-data';

const url = 'https://rubenspgcavalcante.github.io';
const siteType = 'website';
const themeColor = '#666666';

const preview = {
  src,
  width: 1200,
  height: 627,
  type: 'image/png'
};

export default {
  url,
  title,
  description,
  favicon,
  preview,
  siteType,
  themeColor
};
