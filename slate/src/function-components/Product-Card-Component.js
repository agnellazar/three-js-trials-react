import '../../src/styles/product-selection-styles.css'
import { useNavigate } from "react-router-dom"


export function ProductCardComponent(props) {
    
    const navigate = useNavigate()
    
    const handleClick = (item) => {
        props.setMainModel(item);
        navigate('/customize');
    }

    const content = <div id="product-card-wrapper" className="row p-4 m-2">
        <div id="img-container" className="col-8 overflow-hidden" onClick={()=>{handleClick(props.item)}}>
                <img src={props.item.displayImg} alt={props.item.id} className="object-fit-contain w-100 h-100"></img>
        </div>
        <div id="desc-container" className="col-4">
            <div className='align-items-center d-flex h-100'>
                <div>
                    <div className='product-name'>
                        {props.item.name}
                    </div>
                    <div className='product-desc'>
                        {props.item.desc}
                    </div>
                    <div className='product-price pt-5'>
                        Price: {props.item.price }
                    </div>
                </div>
            </div>
        </div>
    </div>

    return content;
}

