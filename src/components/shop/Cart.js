import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
    const { products, clearCart } = useCart();
    return (
        <>
            <div className="container min-h-screen pt-5 mx-auto">
                <div>
                    <h2>Carrito</h2>{" "}
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>nombre</th>
                                <th>Cantidad</th>
                                <th>Precio/unidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((p, k) => {
                                return (
                                    <>
                                        <tr key={k}>
                                            <th>{p.name}</th>
                                            <td>{p.count}</td>
                                            <td>{p.price}</td>
                                            <td>{p.price * p.count}</td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="mt-5 text-right">
                    <button className="btn btn-active " onClick={clearCart}>
                        Limpiar Carrito
                    </button>
                    <button className="ml-5 btn btn-primary">Comprar</button>
                </div>
            </div>
        </>
    );
};

export default Cart;
