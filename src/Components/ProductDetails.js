import React from 'react'
import {useParams} from 'react-router-dom';

function ProductDetails() {
    const {productID}=useParams();

    return (
        <div>
            ProductDetails of product id = {productID}
        </div>
    )
}

export default ProductDetails;