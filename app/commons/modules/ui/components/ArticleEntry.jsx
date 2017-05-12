import React, {Component} from "react";
import {Parallax, Background} from "react-parallax/src/jsx/index";
import ArticleBanner from "./ArticleBanner";

export default class ArticleEntry extends Component {

    render() {
        const banner = this.props.banner || 'summer';

        return (
            <div>
                <Parallax strength={300} className="banner-container">
                    <Background>
                        <ArticleBanner imageName={banner}/>
                    </Background>
                    <header role="banner">
                        <h1><i className={this.props.icon}/><span className="text-muted"> {this.props.title}</span>
                        </h1>
                    </header>
                </Parallax>
                <div className="content-view container">
                    <section className="text-justify" role="main">
                        <article>
                            {this.props.children}
                        </article>
                    </section>
                </div>
            </div>
        )
    }
}