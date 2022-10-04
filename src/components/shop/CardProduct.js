import React from "react";
import { Link } from "react-router-dom";
const CardProduct = ({ product }) => {
    return (
        <div className="shadow-xl card w-100 bg-base-100">
            <Link to={`/item/${product.id}`}>
                <figure>
                    <img src={`/assets/img/${product.img}`} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product.name}
                        {product.new && (
                            <div className="badge badge-secondary">Nuevo</div>
                        )}
                    </h2>
                    <div className="justify-end card-actions">
                        <div className="badge badge-outline">
                            {product.console}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CardProduct;
