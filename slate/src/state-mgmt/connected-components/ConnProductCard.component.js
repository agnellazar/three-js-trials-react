import { ProductCardComponent } from "../../function-components/Product-Card-Component";
import { connect } from 'react-redux'; 

const mapStateToProps = (state, ownProps) => {
    return {props: ownProps};
}

const mapDispatchToProps = (dispatch) => {
    return { setMainModel: (item) => {
            dispatch({
                type: 'NEW_MODEL',
                item: item
            })
        }
    }
};



export const ConnProductCardComponent = connect(mapStateToProps, mapDispatchToProps)(ProductCardComponent);
