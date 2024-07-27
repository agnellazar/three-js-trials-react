import initialState from "../store/initialState";

const mainModelSelect = (state=initialState, action) => {
    console.log('main model select reducer called',action)
    let newState = state;
    if(action.type === 'NEW_MODEL') {
        newState = {...state, mainModel:action.item};
    }
    return newState;
}

export default mainModelSelect;