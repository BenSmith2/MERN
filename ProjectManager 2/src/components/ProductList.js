import React from 'react'
import axios from 'axios';

const ProductList = (props) => {
    return (
        <div>
            {props.product.map((product, i)=>
            <p key={i}>{product.title}, {product.price}, {product.description}</p>
            )}
        </div>
    )
}
export default ProductList;