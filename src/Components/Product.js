import React from 'react'
import { Outlet ,Link} from 'react-router-dom';
function Product() {
    return (
        <div>
            <h1>
                Welcome to the Products Home
            </h1>
            <h6>Displaying List of Products</h6>
            <div>
            <Link to='/products/laptop'>Laptop</Link>{'\t'}
            <Link to='/products/car'>Car</Link>{'\t'}
            </div>
            <br></br>
            <hr></hr>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
export default Product;