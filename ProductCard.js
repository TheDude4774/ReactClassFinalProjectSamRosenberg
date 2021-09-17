import React from "react";

function ProductCard() {
    const currentProduct = fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json));
            return (
                <h1>{currentProduct}</h1>
            )
}

export default ProductCard;