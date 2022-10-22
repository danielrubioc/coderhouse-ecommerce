import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext({
    products: [],
    addToCart: () => {},
    clearCart: () => {},
    count: 0,
});

const useCart = () => {
    return useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useLocalStorage("products", []);

    const addToCart = (newProduct) => {
        const index = products.findIndex((e) => e.id === newProduct.id);
        if (index === -1) {
            setProducts((products) => [
                ...products,
                { ...newProduct, count: 1 },
            ]);
        } else {
            setProducts(
                products.map((product) => {
                    if (product.id === newProduct.id) {
                        product.count = product.count + 1;
                    }
                    return product;
                })
            );
        }
        console.log("products", products);

        toast.success("Agregado al carro", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    const clearCart = () => setProducts([]);

    const context = {
        products: products,
        addToCart: addToCart,
        clearCart: clearCart,
        count: products.length,
    };

    return (
        <CartContext.Provider value={context}>{children}</CartContext.Provider>
    );
};

export { useCart, CartContextProvider };
