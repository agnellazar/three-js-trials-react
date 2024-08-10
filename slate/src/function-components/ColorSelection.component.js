import React from 'react';
import '../styles/rendering.styles.scss'
export function ColorSelectionComponent(props) {

    const variants = props.variants;
    const variantJSX = variants.map((variant)=> {
        const content = <div className='row w-33' key={variant.id} onClick={()=>{props.variantSelect(variant)}}>
                <div className='col-4 p-0 d-flex justify-content-center'>
                    <div className='color-show-circle' style={{backgroundColor: variant.displayColor}}></div>
                </div>
                <div className='col-8'>
                    {variant.name}
                </div>
            </div>
        return content;
    });

    let page = <div  className='position-fixed color-selection-dim '>
        <div  className='color-selection-backdrop'></div>
        Options
        <div className='option-selection-wrapper d-flex w-100 justify-content-between ps-4'>
            {variantJSX}
        </div>
    </div>

    return page;
}