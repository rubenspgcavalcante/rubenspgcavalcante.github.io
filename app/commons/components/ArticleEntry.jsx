import React, {Component} from 'react';

export default class ArticleEntry extends Component {
    render() {
        return (
            <div>
                <header role="banner">
                    <h1><i className={this.props.icon}/><span className="text-muted"> {this.props.title}</span></h1>
                </header>
                <section className="text-justify" role="main">
                    <article>
                        {this.props.children}
                    </article>
                </section>
            </div>
        )
    }
}