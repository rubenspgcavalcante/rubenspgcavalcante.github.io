import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";
import Profile from "./Profile";

export default class Home extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <div id="home" className="m-auto row">
        <div className="col-md-8">
          <Profile/>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <p>I'm fascinated by the <b>JavaScript</b> and <b>NodeJS</b> world and everything that surrounds it.
                Although this is my current focus, I have good experience in other languages
                I've worked in past too, like <b>Python</b>, <b>PHP</b> and <b>C++</b>.</p>
              <p>
                Currently studying <b>Go</b> and functional programing. As you can see I try to be dynamic as
                possible, an open minded person and never block myself to other technologies out of my knowledge box.
              </p>
              <p>So, check my <Link to="/projects">projects</Link> and <Link to="/publications">publications</Link> and
                see a little of my experience!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};