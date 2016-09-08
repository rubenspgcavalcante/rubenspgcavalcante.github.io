import React, {Component} from 'react';
import {ArticleEntry} from '../../commons/index';

export default class Projects extends Component {

    render() {
        return (
            <ArticleEntry icon="fa fa-coffee" title="Projects">
                <p className="lead">Here are some of mine projects</p>
            </ArticleEntry>
        )
    }
}