import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import ItemListContainer from "./components/shop/ItemListContainer";
import ItemDetailContainer from "./components/shop/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
