import { RenderingComponent } from "../../function-components/Rendering.component";
import { connect } from 'react-redux'; 

const mapStateToProps = (state) => {
    return {selectedModelDetails: state.mainModelReducer.selectedModelDetails};
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export const ConnRenderingComponent = connect(mapStateToProps,mapDispatchToProps)(RenderingComponent);