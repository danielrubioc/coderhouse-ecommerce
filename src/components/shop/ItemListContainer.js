import React, { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import { useParams } from "react-router-dom";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
    addDoc,
} from "firebase/firestore";
import Spinner from "../spinner";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    /*  const getItem = () => {
        const db = getFirestore();
        const itemRef = doc(db, "items", "YqvplygWRJSI2ahMAbDm");
        getDoc(itemRef).then((res) => {
            console.log({ id: res.id, ...res.data() });
        });
    }; */

    const setProduct = async () => {
        /* const db = getFirestore();
        console.log(jsonProducts);
        jsonProducts.map((e) => {
            addDoc(collection(db, "items"), {
                name: e.name,
                console: e.console,
                price: e.price,
                type: e.type,
                categoryId: e.categoryId,
                img: e.img,
                categoryId: e.categoryId,
                new: e.new,
                stock: e.stock,
            });
        }); */
    };

    const getItems = (categoryId) => {
        setLoading(true);
        const db = getFirestore();
        let itemsRef = "";
        if (categoryId === undefined) {
            itemsRef = collection(db, "items");
        } else {
            itemsRef = query(
                collection(db, "items"),
                where("categoryId", "==", categoryId)
            );
        }

        getDocs(itemsRef).then((snapshot) => {
            const data = snapshot.docs.map((e) => ({ id: e.id, ...e.data() }));

            setProducts(data);
            setLoading(false);
        });
    };

    useEffect(() => {
        getItems(categoryId);
    }, [categoryId]);

    if (loading) {
        return <Spinner />;
    }

    return (
        <>
            <div className="container min-h-screen mx-auto ">
                {/*   <button onClick={setProduct}>cliiick </button> */}
                <div className="container grid grid-cols-1 gap-4 pt-5 mx-auto mt-5 md:grid-cols-4">
                    {products.map((product, key) => (
                        <CardProduct key={key} product={product} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ItemListContainer;
