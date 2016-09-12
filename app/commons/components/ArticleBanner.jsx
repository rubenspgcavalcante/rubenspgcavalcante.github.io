import React, {Component} from "react";
import MediaQuery from "react-responsive";

export default class ArticleBanner extends Component {
    _sizes = [
        {size: [1920, 400], minWidth: 1367},
        {size: [1366, 400], minWidth: 769},
        {size: [768, 360], minWidth: 481},
        {size: [480, 360], minWidth: 0}
    ];

    render() {
        const {imageName} = this.props;

        return (
            <div>{
                this._sizes.map((value, i) => {
                    const [width, height] = value.size;

                    let imageSrc = require(`../../assets/banners/${imageName}/${imageName}.${width}x${height}.png`);
                    return (
                        <MediaQuery key={i} maxWidth={width} minWidth={value.minWidth}>
                            <img src={imageSrc}/>
                        </MediaQuery>
                    )
                })}
            </div>
        )
    }
}