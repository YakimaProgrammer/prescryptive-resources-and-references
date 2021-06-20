import { Component } from "react";
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import { PlaceholderPage } from "../PlaceholderPage";
import { CardDisplay } from "../CardDisplay";
import { Menu } from "./Menu";

class SPA extends Component {
    render() {
        return (
            <BrowserRouter>
                <Menu />
            </BrowserRouter>
        )
    }
}

export { SPA };