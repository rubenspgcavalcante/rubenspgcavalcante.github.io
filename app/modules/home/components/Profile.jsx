import React from 'react';
import { src, trace } from "assets/profile/me.png";
import ProgressiveImage from "react-progressive-image";

const medias = {
  'twitter': 'https://twitter.com/rubenspgc',
  'github': 'https://github.com/rubenspgcavalcante/',
  'medium': 'https://medium.com/@rubenspgcavalcante',
  'linkedin': 'https://www.linkedin.com/in/rubens-pinheiro-a34a4823/',
  'stack-overflow': 'https://stackoverflow.com/users/2346915/rubens-pinheiro'
};

const Profile = (props) => (
  <div id="profile" className="card">
    <header className="card-header">
      <h4 className="text-center">I'm a Front end developer</h4>
    </header>
    <article className="card-body flex-md-wrap">
      <div className="profile-pic">
        <div className="border border-dark rounded">
          <ProgressiveImage src={src} placeholder={trace}>
            {(src) => <img src={src} alt='my picture'/>}
          </ProgressiveImage>
        </div>
      </div>
      <p>
        Passionate about new technologies, active open source contributor,
        currently living and working in Berlin, Germany.
      </p>
      <p>
        My focus is always build applications with a high quality code, with well
        defined design and architecture, being capable of escalate easily, don't loosing
        the practicality of creating new features in a fast way.
      </p>
    </article>
    <footer className="card-footer text-right">
      <span>Follow me
        {Object.keys(medias).map(key =>
          <a href={medias[key]} key={key} className="ml-2"><i className={`fa fa-${key}`}/></a>
        )}</span>
    </footer>
  </div>
);

Profile.propTypes = {};
export default Profile;