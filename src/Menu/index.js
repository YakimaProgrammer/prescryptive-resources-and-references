import { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import style from "./index.module.css";
import logo from "../assets/prescryptive/logotext.png";
import calendar from "../assets/bootstrap-icons/calendar-event.svg";
import badge from "../assets/bootstrap-icons/person-badge.svg";
import chart from "../assets/bootstrap-icons/clipboard-data.svg";
import clock from "../assets/bootstrap-icons/clock-fill.svg";
import clipboard from "../assets/bootstrap-icons/clipboard.svg";
import questionMark from "../assets/bootstrap-icons/question-circle-fill.svg";
import person from "../assets/bootstrap-icons/person-fill.svg";

function buildMenu(data, currentUrl) {
    var rows = [];
    for (let i = 0; i < data.length; i++) {
        rows.push( 
            <li key={i} id={
                    data[i].linkTo === currentUrl ? style.activePage : null
                }>
                <NavLink to={data[i].linkTo}>
                    <img src={data[i].icon} alt="" />
                    <span>{data[i].pageName}</span>
                </NavLink>
            </li>
        );
    }
    
    return (
        <ul className={style.menuOptions}>
            {rows}
        </ul>
    )
}

const PAGES = [
    {
        linkTo: "/appointments",
        icon: calendar,
        pageName: "Appointments"
    },
    {
        linkTo: "/customers",
        icon: badge,
        pageName: "Customers"
    },
    {
        linkTo: "/report",
        icon: chart,
        pageName: "Report"
    },
    {
        linkTo: "/hours",
        icon: clock,
        pageName: "Service Hours"
    },
    {
        linkTo: "/service",
        icon: clipboard,
        pageName: "Service"
    }
];

const SETTINGS = [
    {
        linkTo: "/resources",
        icon: questionMark,
        pageName: "Helpful resources"
    },
    {
        linkTo: "/signOut",
        icon: person,
        pageName: "Sign out"
    }
];

class UnconnectedMenu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            provider: "Please select your provider from the dropdown menu",
            userHasMadeASelection: false
        };
    }
    render() {
        return (
            <div className={style.menuDiv}>
                <div className={style.menuContent}>
                    <div>
                        <div>
                            <img src={logo} className={style.logo} alt="Prescryptive"/>
                            <select 
                                className={style.providerSelector} 
                                onInput={this.updateProvider.bind(this)}
                            >
                                <option 
                                    value="" 
                                    disabled={this.state.userHasMadeASelection}
                                >Choose a provider</option>
                                {this.props.children}
                            </select>
                            <p>{this.state.provider}</p>
                            
                            {buildMenu(PAGES, this.props.location.pathname)}
                        </div>
                    
                        <div className={style.paddingDiv}></div>
                    
                        <div>
                            {buildMenu(SETTINGS, this.props.location.pathname)}
                            
                            <hr />
                            <p>
                                <u>
                                    <NavLink to="/legal">Terms & Conditions</NavLink>
                                </u>
                                &nbsp;|&nbsp;
                                <u>
                                    <NavLink to="/privacy">Privacy Policy</NavLink>
                                </u>
                            </p>
                            <p>© Prescryptive Health, Inc.</p>
                        </div>
                    </div>
                </div>
                <div className={style.paddingDiv}></div>
            </div>
        )
    }
    
    updateProvider(e) {
        this.setState({
            provider: e.target.value,
            userHasMadeASelection: true
        });
    }
}

/* Being able to access the current URL is nice for highlighting the current 
page in the menu! */
const Menu = withRouter(props => <UnconnectedMenu {...props}/>)

export { Menu };