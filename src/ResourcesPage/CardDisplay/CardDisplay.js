import { Component } from "react";
import { Card } from "../Card";
import style from "./CardDisplay.module.css";
import resourceDefinitions from "./resources.json";

class CardDisplayComponent extends Component {
    render() {
        var cards = [];
        for (let i = 0; i < resourceDefinitions.length; i++) {
            if (
                this.props.currentFilter !== "All" &&
                this.props.currentFilter !== resourceDefinitions[i].category
            ) {
                continue;
            }
            
            cards.push(
                <div key={i}>
                    <Card 
                        category={resourceDefinitions[i].category}
                        description={resourceDefinitions[i].description}
                        linkType={resourceDefinitions[i].linkType}
                        linkTo={resourceDefinitions[i].linkTo}
                    />
                </div>
            )
        }
        return (
            <div className={style.container}>
                <div className={style.resources}>
                    {cards}
                </div>
            </div>
        )
    }
}

export { CardDisplayComponent };