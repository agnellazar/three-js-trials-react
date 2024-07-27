import '../../src/styles/product-selection-styles.css'


export function ProductCardComponent(props) {
    const content = <div id="product-card-wrapper" className="row p-4">
        <div id="img-container" className="col-8 overflow-hidden">
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
                    <div className='product-price'>
                        {props.item.price + '100'}
                    </div>
                </div>
            </div>
        </div>
    </div>

    return content;
}