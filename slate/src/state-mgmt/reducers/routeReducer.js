import {initialState} from '../store/initialState'

const routeReducer = (state = initialState, action) => {
    let newState = state;
    switch(action.type) {
        case 'NEW_PATH': {
            newState.route.path = action.path
            return newState;
        }
    }
}

export default routeReducer;