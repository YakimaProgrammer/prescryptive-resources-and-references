import { Component } from "react";
import { Card } from "../Card";
import style from "./index.module.css";
import resourceDefinitions from "./resources.json";

class CardDisplay extends Component {
    render() {
        var cards = [];
        for (let i = 0; i < resourceDefinitions.length; i++) {
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

export { CardDisplay };