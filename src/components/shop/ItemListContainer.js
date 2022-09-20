import React from "react";
import CardProduct from "./CardProduct";

const ItemListContainer = ({ greeting }) => {
    const tempProducts = Array(12).fill(2);
    return (
        <>
            <h4>{greeting}</h4>
            <div class="grid grid-cols-4 gap-4">
                {tempProducts.map((el) => (
                    <CardProduct />
                ))}
            </div>
        </>
    );
};

export default ItemListContainer;
