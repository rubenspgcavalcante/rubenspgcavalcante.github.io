import React from 'react';
import ProgressiveWebp from 'modules/ui/components/ProgressiveWebp';
import { importWithTrace } from '../../core/utils/image';

const myPicImporter = importWithTrace(
  import(/* webpackMode: "eager" */ 'assets/profile/me.png'),
  import(/* webpackMode: "eager" */ 'assets/profile/me.webp')
);

const medias = {
  twitter: 'https://twitter.com/rubenspgc',
  github: 'https://github.com/rubenspgcavalcante/',
  medium: 'https://medium.com/@rubenspgcavalcante',
  linkedin: 'https://www.linkedin.com/in/rubens-pinheiro-a34a4823/',
  'stack-overflow': 'https://stackoverflow.com/users/2346915/rubens-pinheiro'
};

export default () => (
  <div id="profile" className="card ">
    <header className="card-header">
      <h4 className="text-center">I'm a Front end developer</h4>
    </header>
    <article className="card-body flex-md-wrap">
      <div className="profile-pic">
        <ProgressiveWebp alt={'my picture'} importer={myPicImporter} />
      </div>
      <p>
        Passionate about new technologies, active open source contributor,
        currently living and working in Berlin, Germany.
      </p>
      <p>
        My focus is always to build applications with high quality code, with
        well defined design and architecture, being capable of scale easily,
        don't loosing the practicality of creating new features in a fast way.
        For instance, you can check that my site is a PWA (Progressive Web App),
        and with focus not only in web performance (using optimized images like
        webp) but also on accessibility for readers and SEO. I push you to check
        how it performs on lighthouse!
      </p>
      <span>
        <a
          className="mr-2"
          target="_blank"
          rel="noopener"
          title="Github commits"
          href="https://sourcerer.io/rubenspgcavalcante"
        >
          <img
            src="https://img.shields.io/badge/JavaScript-459%20commits-orange.svg"
            alt="Github JS commits number"
          />
        </a>
      </span>
    </article>
    <footer className="card-footer text-right">
      <span>
        Follow me
        {Object.keys(medias).map(key => (
          <a title={key} href={medias[key]} key={key} className="ml-2">
            <i className={`fa fa-${key}`} />
          </a>
        ))}
      </span>
    </footer>
  </div>
);
