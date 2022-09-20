import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import ItemListContainer from "./components/shop/ItemListContainer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div class="container mx-auto">
                <ItemListContainer greeting="Hello world!" />
            </div>
        </div>
    );
}

export default App;
