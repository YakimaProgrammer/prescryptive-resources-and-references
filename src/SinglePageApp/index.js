import { Component } from "react";
import {
    BrowserRouter,
    Route
} from "react-router-dom";
import { PlaceholderPage } from "../PlaceholderPage";
import { CardDisplay } from "../CardDisplay";
import { Menu } from "./Menu";
import style from "./index.module.css";

class SPA extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={style.asTable}>
                    <div>
                        <div className={style.menu}>
                            <Menu>
                                {/* This sets which providers you can select */}
                                <option value="Pharmacy 123">
                                    Pharmacy 123
                                </option>
                                
                                <option value="Pharmacy ABC">
                                    Pharmacy ABC
                                </option>
                                
                                <option value="Pharmacy Foo">
                                    Pharmacy Foo
                                </option>
                                
                                <option value="Pharmacy Bar">
                                    Pharmacy Bar
                                </option>
                                
                                <option value="Provider Biz">
                                    Provider Biz
                                </option>
                            </Menu>
                        </div>

                        <div className={style.content}>
                            <Route 
                                exact 
                                path={["/", "/resources"]} 
                                component={CardDisplay}
                            />
                            <Route 
                                path={["/appointments", "/customers", "/report",
                                     "/hours", "/service", "/signOut", "/legal",
                                     "/privacy"]} 
                                component={PlaceholderPage}
                            />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export { SPA };