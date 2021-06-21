import { Component } from "react";
import { CardDisplay } from "./CardDisplay";
import { FilterBar } from "./FilterBar";

class ResourcesPage extends Component {
    render() {
        return (
            <div>
                <h1>Helpful resources and references</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                   Integer efficitur, lorem sit amet commodo tristique, urna 
                   orci finibus nulla, a tempor quam arcu et est. Pellentesque 
                   ut neque posuere, dapibus risus ac, dapibus diam. Etiam.
                </p>
                
                <FilterBar />
                <CardDisplay />
            </div>
        )
    }
}

export { ResourcesPage };