import { Component } from "react";
import style from "./index.module.css";

import pdf from "../assets/pdf.svg";
import video from "../assets/camera-video-fill.svg";
import external from "../assets/box-arrow-up-right.svg";
import doc from "../assets/file-earmark-text-fill.svg";

const resourceType = {
    video: {
        img: video,
        note: "Video"
    },
    pdf: {
        img: pdf,
        note: "PDF"
    },
    external: {
        img: external,
        note: "External link"
    },
    document: {
        img: doc,
        note: "Document"
    }
};

class Card extends Component {
    render() {
        return (
            <a href={this.props.linkTo}>
                <div className={style.Card}>
                    <div>
                        <p className={style.detailText}>
                            {this.props.category}
                        </p>
                    </div>
                    
                    <div>
                        <p className={style.description}>
                            {this.props.description}
                        </p>
                    </div>
                    
                    <div>
                        <p className={style.detailText}>
                            <img 
                                src={resourceType[this.props.linkType].img} 
                                className={style.icon}
                                alt=""
                            />
                            {resourceType[this.props.linkType].note}
                        </p>
                    </div>
                </div>
            </a>
        );
    }
}

export { Card };