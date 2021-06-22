import ReactDOM from "react-dom";
import style from "./index.module.css";
import { SPA } from "./SinglePageApp";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.render(
    <div className={style.rootDiv}>
        <Provider store={store}>
            <SPA />
        </Provider>
    </div>,
    document.getElementById("root")
);