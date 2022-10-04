import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import jsonProducts from "../../utils/data.json";
import { useParams } from "react-router-dom";
import Spinner from "../spinner";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    const fetchData = (categoryId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const productsFiltereds =
                    categoryId !== undefined
                        ? jsonProducts.filter(
                              (product) => product.category == categoryId
                          )
                        : jsonProducts;
                resolve(productsFiltereds);
            }, 2000);
        });
    };

    useEffect(() => {
        setLoading(true);
        fetchData(categoryId).then((res) => {
            setProducts(res);
            setLoading(false);
        });
    }, [categoryId]);

    return (
        <>
            <h4 className="text-5xl font-bold mb-5">{greeting}</h4>

            {loading && <Spinner />}

            {!loading && (
                <div className="container mx-auto grid grid-cols-4 gap-4">
                    {products.map((product, key) => (
                        <CardProduct key={key} product={product} />
                    ))}
                </div>
            )}
        </>
    );
};

export default ItemListContainer;
