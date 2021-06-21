import { createStore } from 'redux';

function reducer(state = {resourcesMenu: "All"}, action) {
    if (action.type === "newResourcesFilter") {
        return {
            ...state,
            resourcesMenu: action.newMenu
        }
    }
    
    return state;
}

const store = createStore(reducer);

export { store };