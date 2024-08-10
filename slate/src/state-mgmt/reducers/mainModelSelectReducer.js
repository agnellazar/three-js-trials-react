import initialState from "../store/initialState";

const mainModelSelect = (state=initialState, action) => {
    let newState = state;
    if(action.type === 'NEW_MODEL') {
        newState = {...state, 
            selectedModelDetails: {
                model:action.item,
                variant: action.item.variants[0]
            }
        };
    } else if (action.type === 'VARIANT_CHANGE') {
        newState = {...state, 
            selectedModelDetails: { 
                ...state.selectedModelDetails,
                variant: action.variant
            }
        };
    }
    return newState;
}

export default mainModelSelect;