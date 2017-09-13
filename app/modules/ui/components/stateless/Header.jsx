import React from 'react';

export default ({ title, subtitle, picture }) => (
  <div className="jumbotron" >
    <div className="container" >
      <h1 className="display-3" >{title}</h1 >
      <p >{subtitle}</p >
    </div >
  </div >
);