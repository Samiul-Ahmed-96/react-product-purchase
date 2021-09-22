import React from 'react';

const Product = (props) => {
    console.log(props.product);
    const {title,price} = props.product;
    return (
        <div>
            <h3>Title : {title}</h3>
            <h3>Price : {price}</h3>
        </div>
    );
};

export default Product;