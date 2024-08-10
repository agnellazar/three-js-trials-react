import { ColorSelectionComponent } from "../../function-components/ColorSelection.component";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {variants: state.mainModelReducer.selectedModelDetails.model.variants};
}

const mapDispatchToProps = (dispatch) => {
    return {
        variantSelect : (variant)=> {
            dispatch({
                type: 'VARIANT_CHANGE',
                variant: variant
            })
        }
    }
}

export const ConnColorSelectionComponent = connect(mapStateToProps,mapDispatchToProps)(ColorSelectionComponent);