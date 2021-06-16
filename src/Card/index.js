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
    constructor(props) {
        super(props);
        
        this.state = {
            fullTextShown: false,
            animationComplete: false
        }
    }
    render() {
        console.log("rendering!");
        var description = this.props.description;
        if(this.props.description.length > 57) {
            description = <>
                <span className={
                    !this.state.fullTextShown ? 
                    style.active :
                    style.hidden
                }>
                    <span title={this.props.description}>
                        {this.props.description.slice(0,57)}
                    </span>
                    <span 
                        className={style.showMore} 
                        onClick={this.expandText.bind(this)}
                    >...</span>
                </span>
                
                <span className={
                    this.state.fullTextShown ? 
                    (
                        this.state.animationComplete ?
                        style.active :
                        style.invisible
                    ) :
                    style.hidden
                }>
                    {this.props.description}
                </span>
            </>;
        }
        
        return (
            <div className={style.Card}>
                <div>
                    <p className={style.detailText}>
                        {this.props.category}
                    </p>
                </div>
                
                <div>
                    <p 
                        ref={this.captureAccordion.bind(this)} 
                        className={style.description}
                    >
                        {description}
                    </p>
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
    
    componentDidUpdate() {
        if (!this.state.animationComplete) {
            var span = this.accordion.children[1];
            var newHeight = span.offsetHeight;
            span.className = style.hidden;
            this.accordion.style.height = newHeight + "px";
            setTimeout((function() {
                this.setState({
                   animationComplete: true 
                });
            }).bind(this), 500);
        }
    }
    
    captureLink(el) {
        this.link = el;
    }
    
    captureAccordion(el) {
        this.accordion = el;
    }
    
    expandText() {
        this.setState({
            fullTextShown: true
        });
    }
}

export { Card };