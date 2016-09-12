import React, {Component} from "react";
import {Parallax, Background} from "react-parallax";

export default class ArticleEntry extends Component {
    _sizes = {lg: [1920, 400], md: [1366, 400], sm: [768, 360], xs: [480, 360]};

    render() {
        const banner = this.props.banner || 'summer';
        const [lgWidth,  lgHeight] = this._sizes.lg;
        const largeImage = require(`../../assets/banners/${banner}/${banner}.${lgWidth}x${lgHeight}.png`);

        return (
            <div>
                <Parallax strength={300} className="banner-container">
                    <Background>
                        <picture>
                            {
                                Object.keys(this._sizes).map(size => {
                                    const [width, height] = this._sizes[size];

                                    let image = require(`../../assets/banners/${banner}/${banner}.${width}x${height}.png`);
                                    return <source key={size} srcSet={image} media={`(max-width: ${width}px)`}/>
                                })
                            }
                            <img src={largeImage}/>
                        </picture>
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