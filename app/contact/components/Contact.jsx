import React, {Component} from 'react';
import {ArticleEntry} from '../../commons/index';

export default class Contact extends Component {

    render() {
        return (
            <ArticleEntry icon="fa fa-paper-plane-o" title="Contact Me" banner="winter">
                <p className="lead">Here are some of mine projects</p>
            </ArticleEntry>
        )
    }
}