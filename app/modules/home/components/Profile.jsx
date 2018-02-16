import React from 'react';
import myPic from "assets/profile/me.png";
import ProgressiveImage from "../../ui/components/ProgressiveImage";

const Profile = (props) => (
  <div className="card">
    <ProgressiveImage source={myPic}/>
    <div className="card-body">
      Front end developer
    </div>
  </div>
);

Profile.propTypes = {};
export default Profile;