import { Component } from "react";
import { FadingTextTransition } from "./FadingTextTransition";
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
        var description;
        if (this.props.description.length > 57) {
            description = <FadingTextTransition
                shortText={this.props.description.slice(0,57)}
                fullText={this.props.description}
            />
        } else {
            description = <p>{this.props.description}</p>;
        }
        
        return (
            <div className={style.Card}>
                <div>
                    <p className={style.detailText}>
                        {this.props.category}
                    </p>
                </div>
                
                <div className={style.description}>
                    {description}
                </div>
                
                <div>
                    <p className={style.detailText}>
                        <a 
                            href={this.props.linkTo} 
                            className={style.cardLink}
                            ref={this.captureLink.bind(this)}
                        >
                            <img 
                                src={resourceType[this.props.linkType].img} 
                                className={style.icon}
                                alt=""
                            />
                            {resourceType[this.props.linkType].note}
                        </a>
                    </p>
                </div>
            </div>
        );
    }
    
    captureLink(el) {
        this.link = el;
    }
}

export { Card };