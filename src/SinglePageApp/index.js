import { Component } from "react";
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PlaceholderPage } from "../PlaceholderPage";
import { ResourcesPage } from "../ResourcesPage";
import { Menu } from "../Menu";
import style from "./index.module.css";

//https://ui.dev/react-router-v5-animated-transitions/
class RoutesComponent extends Component {
    render() {
        return (
            <div className={style.content}>
                <TransitionGroup>
                    <CSSTransition 
                        timeout={500} 
                        key={this.props.location.key} 
                        classNames="fade"
                    >
                        <Switch>
                            <Route 
                                exact 
                                path={["/", "/resources"]} 
                                component={ResourcesPage}
                            />
                            <Route 
                                path={["/appointments", "/customers", "/report",
                                     "/hours", "/service", "/signOut", "/legal",
                                     "/privacy"]} 
                                component={PlaceholderPage}
                            />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

const Routes = withRouter(props => <RoutesComponent {...props} />);

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

                        <Routes />
                        
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export { SPA };