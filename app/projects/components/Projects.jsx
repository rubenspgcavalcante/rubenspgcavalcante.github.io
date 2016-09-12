import React, {Component} from 'react';
import {ArticleEntry} from '../../commons/index';

export default class Projects extends Component {

    render() {
        return (
            <ArticleEntry icon="fa fa-github" title="Projects" banner="autumn">
                <p className="lead">Hello World!</p>
            </ArticleEntry>
        )
    }
}