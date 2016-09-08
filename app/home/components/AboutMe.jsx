import React, {Component} from 'react';
import {ArticleEntry} from '../../commons/index';

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        const repoNames = {ngamd: 'angular-amd-styleguide', picasso: 'Picasso'};

        const repo = Object.keys(repoNames).reduce((curr, key) => {
            curr[key] = {
                url: `https://github.com/rubenspgcavalcante/${repoNames[key]}`,
                name: repoNames[key]
            };
            return curr;
        }, {});

        this.state = {repo};
    }

    render() {
        return (
            <ArticleEntry icon="fa fa-hand-spock-o" title="About Me">
                <p className="lead"> I'm a developer with several experiences, focused on Front End development.
                    With about 8 years of JavaScript, developing a wide variety of applications, from simple websites to
                    a JS framework.
                </p>
                <p className="lead">
                    I'm also have a lot of interest in applying and implement architecture and design patterns into
                    JavaScript applications, like in
                    <a className="horizontal-spacer-xs"
                       href={this.state.repo.picasso.url}>{this.state.repo.picasso.name}
                    </a>framework, and also to organize better the composition of different technologies, as
                    you can see in <a className="horizontal-spacer-xs"
                                      href={this.state.repo.ngamd.url}>{this.state.repo.ngamd.name}</a>.
                </p>
            </ArticleEntry>
        )
    }
}