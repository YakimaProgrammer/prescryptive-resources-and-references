import { connect } from "react-redux";
import { FilterBarComponent } from "./FilterBar";

function mapStateToProps(state) {
    return {
        currentFilter: state.resourcesMenu
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setNewFilter: function(newFilter) {
            return dispatch({
                type: "newResourcesFilter",
                newMenu: newFilter
            });
        }
    }
}

const FilterBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterBarComponent);

export { FilterBar };