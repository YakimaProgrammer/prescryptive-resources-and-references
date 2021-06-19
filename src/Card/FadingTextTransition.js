import { Component } from "react";
import style from "./FadingTextTransition.module.css";

function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}

class FadingTextTransition extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            animationState: 0
        }
    }
        
    calculateCurrentAnimation() {
        switch (this.state.animationState) {
            case 0:
                return (
                    <div>
                        <span title={this.props.fullText}>
                            {this.props.shortText}
                        </span>
                        <span 
                            onClick={this.playAnimation.bind(this)}
                            className={style.showMore}
                        >...</span>
                    </div>
                );
            
            case 1:
                return (
                    <div className={style.fade}>
                        <span>{this.props.shortText}</span>
                        <span className={style.showMore}>...</span>
                    </div>
                );
            
            case 2:
                return (
                    <div className={style.fade}>
                        {this.props.fullText}
                    </div>
                );
            
            case 3:
                return (
                    <div className={style.fade}>
                        
                    </div>
                );
            
            default: //Default should never fire!
            case 4:
                return (
                    <div>
                        {this.props.fullText}
                    </div>
                );
        }
    }
    
    render() {
        if (this.props.shouldBeAnimating) {
            this.playAnimation();
        }
        
        return (
            <div 
                className={style.transitionHandler}
                ref={this.captureDiv.bind(this)}
            >
                {this.calculateCurrentAnimation()}
            </div>
        );
    }
    
    playAnimation(e) {
        e.stopPropagation();
        
        if (this.state.animationState === 0) {
            (async function() {
                this.setState({
                    animationState: 1
                });
                await sleep(500);
                
                //Remember, I have to grab the new height, expand, THEN show it!
                this.setState({
                    animationState: 2
                });
                var newHeight = this.div.firstElementChild.offsetHeight;
                this.setState({
                    animationState: 3
                });
                this.div.style.height = newHeight + "px";
                await sleep(500);
                
                //Now render the full text
                this.setState({
                    animationState: 4
                });
                
                /*Don't lock the height of the text once the animation is 
                complete. Otherwise the text overflows in weird ways when the
                browser window is resized. */
                this.div.style.height = "auto";
                
            }).bind(this)().catch(err => console.log(err));
        }
    }
    
    captureDiv(el) {
        this.div = el;
    }
}

export { FadingTextTransition };