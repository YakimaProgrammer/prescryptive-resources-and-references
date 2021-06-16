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
        var description = this.props.description;
        if (description.length > 57) {
            description = description.slice(0,57) + "...";
        }
        return (
            <a className={style.cardLink} href={this.props.linkTo}>
                <div className={style.Card}>
                    
                        <p className={style.detailText}>
                            {this.props.category}
                        </p>
                    
                    <div>
                            <p className={style.description}>
                                {description}
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