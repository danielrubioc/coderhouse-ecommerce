import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../spinner";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useCart } from "../../context/CartContext";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { itemId } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const getItem = (itemId) => {
        setLoading(true);
        const db = getFirestore();
        const itemRef = doc(db, "items", itemId);
        getDoc(itemRef).then((res) => {
            setProduct({ id: res.id, ...res.data() });
            setLoading(false);
        });
    };

    const addHandler = () => {
        addToCart(product);
    };

    useEffect(() => {
        getItem(itemId);
    }, [itemId]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="container min-h-screen mx-auto">
                <div className="mt-5 text-left">
                    <button
                        className="btn btn-active "
                        onClick={() => navigate(-1)}
                    >
                        Volver
                    </button>
                </div>

                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div>
                        <h1 className="text-5xl font-bold">{product.name}</h1>
                        <p className="py-6">{product.console}</p>
                        <p className="py-6">$ {product.price}</p>
                        <p className="py-6">{product.type}</p>
                        {product.stock === 0 && <div>Sin stock</div>}
                        <button
                            className="btn btn-primary"
                            onClick={addHandler}
                            disabled={product.stock === 0}
                        >
                            Agregar al carro
                        </button>
                    </div>
                    <img
                        src={`${product.img}`}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </>
    );
};

export default ItemDetailContainer;
