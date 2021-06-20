import { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/prescryptive/logotext.png";
import style from "./MenuStyle.module.css";
import calendar from "../assets/bootstrap-icons/calendar-event.svg";
import badge from "../assets/bootstrap-icons/person-badge.svg";
import chart from "../assets/bootstrap-icons/clipboard-data.svg";
import clock from "../assets/bootstrap-icons/clock-fill.svg";
import clipboard from "../assets/bootstrap-icons/clipboard.svg";
import questionMark from "../assets/bootstrap-icons/question-circle-fill.svg";
import person from "../assets/bootstrap-icons/person-fill.svg";

function buildMenu(data) {
    var rows = [];
    for (let i = 0; i < data.length; i++) {
        rows.push( 
            <li key={i}>
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

class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            provider: "Please select your provider from the drop down menu"
        }
    }
    render() {
        return (
            <div className={style.menuDiv}>
                <img src={logo} className={style.logo} alt="Prescryptive"/>
                <select 
                    className={style.providerSelector} 
                    onInput={this.updateProvider.bind(this)}
                >
                    <option value="Pharmacy 123">Pharmacy 123</option>
                    <option value="Pharmacy ABC">Pharmacy ABC</option>
                    <option value="Pharmacy Foo">Pharmacy Foo</option>
                    <option value="Pharmacy Bar">Pharmacy Bar</option>
                </select>
                <p>{this.state.provider}</p>
                
                {buildMenu(PAGES)}
                <div className={style.paddingDiv}>&nbsp;</div>
                {buildMenu(SETTINGS)}
                
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
        )
    }
    
    updateProvider(e) {
        this.setState({
           provider: e.target.value 
        });
    }
}

export { Menu };