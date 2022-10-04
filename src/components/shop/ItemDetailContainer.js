import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jsonProducts from "../../utils/data.json";
import Spinner from "../spinner";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const { itemId } = useParams();

    const fetchDataById = (itemId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const productFiltereds =
                    itemId !== undefined
                        ? jsonProducts.find((product) => product.id == itemId)
                        : [];
                resolve(productFiltereds);
            }, 2000);
        });
    };

    useEffect(() => {
        setLoading(true);
        fetchDataById(itemId)
            .then((resp) => {
                setProduct(resp);
            })
            .finally(() => setLoading(false));
    }, [itemId]);

    return (
        <>
            {loading && <Spinner />}
            {!loading && (
                <>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div>
                                <h1 className="text-5xl font-bold">
                                    {product.name}
                                </h1>
                                <p className="py-6">{product.console}</p>
                                <p className="py-6">$ {product.price}</p>
                                <p className="py-6">{product.type}</p>
                                <button className="btn btn-primary">
                                    Agregar al carro
                                </button>
                            </div>
                            <img
                                src={`/assets/img/${product.img}`}
                                className="max-w-sm rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default ItemDetailContainer;
