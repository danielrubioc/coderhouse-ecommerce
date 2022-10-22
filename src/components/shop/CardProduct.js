import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CardProduct = ({ product }) => {
    const { addToCart } = useCart();
    const addHandler = () => {
        addToCart(product);
    };

    return (
        <div className="shadow-xl card w-100 bg-base-100">
            <Link to={`/item/${product.id}`}>
                <figure>
                    <img src={`${product.img}`} alt="Shoes" />
                </figure>
            </Link>
            <div className="card-body">
                <Link to={`/item/${product.id}`}>
                    <h2 className="card-title text-start">
                        {product.name}
                        {product.new && (
                            <div className="badge badge-secondary">Nuevo</div>
                        )}
                    </h2>
                    <div className="justify-start card-actions">
                        {product.price}
                    </div>
                </Link>
                {product.stock === 0 && <div>Sin stock</div>}
                <div className="justify-end card-actions">
                    <button
                        className="btn"
                        disabled={product.stock === 0}
                        onClick={() => addHandler(product)}
                    >
                        Agregar al Carro
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;
