import { RenderingComponent } from "../../function-components/Rendering.component";
import { connect } from 'react-redux'; 

const mapStateToProps = (state) => {
    console.log('state',state);
    return {item: state.mainModelReducer.mainModel};
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export const ConnRenderingComponent = connect(mapStateToProps,mapDispatchToProps)(RenderingComponent);