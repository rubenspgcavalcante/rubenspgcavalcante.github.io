import React, {Component} from 'react';
import {ArticleEntry} from '../../commons/modules/ui/index';

export default class Home extends Component {
    render() {
        return (
            <ArticleEntry banner="spring" icon="fa fa-comment-o" title="JavaScript e Tudo Mais">
                <title>Um pouco sobre ECMAScript 6</title>
                <p className="lead">Hello World!</p>
            </ArticleEntry>
        )
    }
}