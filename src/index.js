import ReactDOM from "react-dom";
import style from "./index.module.css";
import { SPA } from "./SinglePageApp";

ReactDOM.render(
    <div className={style.rootDiv}>
        <SPA />
    </div>,
    document.getElementById("root")
);