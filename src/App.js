import "./App.css";
import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/shop/ItemListContainer";
import ItemDetailContainer from "./components/shop/ItemDetailContainer";
import NotFound from "./components/notFound/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DarkModeContext from "./context/DarkModeContext";
import { CartContextProvider } from "./context/CartContext";
import { useState } from "react";
import Cart from "./components/shop/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    const DarkMode = useContext(DarkModeContext);
    const [darkMode, setDarkMode] = useState(DarkMode);

    return (
        <DarkModeContext.Provider value={darkMode}>
            <div className="App" data-theme={darkMode ? "dark" : "light"}>
                <ToastContainer />
                <CartContextProvider>
                    <BrowserRouter>
                        <Navbar setDarkMode={setDarkMode} />
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <ItemListContainer greeting="Todos los Productos" />
                                }
                            />
                            <Route
                                path="/category/:categoryId"
                                element={
                                    <ItemListContainer greeting="Todos los Productos" />
                                }
                            />
                            <Route
                                path="/item/:itemId"
                                element={<ItemDetailContainer />}
                            />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </CartContextProvider>
            </div>
        </DarkModeContext.Provider>
    );
}

export default App;
