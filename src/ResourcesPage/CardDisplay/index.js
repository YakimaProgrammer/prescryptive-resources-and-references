import { connect } from "react-redux";
import { CardDisplayComponent } from "./CardDisplay";

function mapStateToProps(state) {
    return {
        currentFilter: state.resourcesMenu
    }
}

const CardDisplay = connect(
    mapStateToProps
)(CardDisplayComponent);

export { CardDisplay };