import { Component } from "react";
import { TransitionGroup, CSSTransition  } from "react-transition-group";
import style from "./index.module.css";
import pdf from "../../assets/YakimaProgrammer/pdf.svg";
import video from "../../assets/bootstrap-icons/camera-video-fill.svg";
import external from "../../assets/bootstrap-icons/box-arrow-up-right.svg";
import doc from "../../assets/bootstrap-icons/file-earmark-text-fill.svg";

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

function getSelectedText() {
    //https://stackoverflow.com/a/5379408
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type !== "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}

class Card extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            fullTextShown: false
        }
    }
    
    render() {
        var description;
        if (this.props.description.length > 57) {
            let textComponent;
            if (this.state.fullTextShown) {
                textComponent = <CSSTransition 
                    timeout={500} 
                    classNames='fade'
                    key={1}
                >
                    <span>
                        {this.props.description}
                    </span>
                </CSSTransition>   
            } else {
                textComponent = <CSSTransition 
                    timeout={500} 
                    classNames='fade'
                    key={0}
                >
                    <span>
                        <span>{this.props.description.slice(0,57)}</span>
                        <span 
                            className={style.showMore}
                            onClick={this.showMore.bind(this)}
                        >...</span>
                    </span>
                </CSSTransition>
            }
            
            description = <TransitionGroup>
                {textComponent}
            </TransitionGroup>
        } else {
            description = <p>{this.props.description}</p>;
        }
        
        return (
            <div onClick={this.clickLink.bind(this)} className={style.Card}>
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
    
    clickLink() {
        //Being able to select text WITHOUT activating the link is a nice touch
        if (!getSelectedText()) {
            this.link.click();
        }
    }
    
    showMore(e) {
        e.stopPropagation();
        this.setState({
            fullTextShown: true
        });
    }
}

export { Card };