import "./App.css";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import Cart from "./components/Cart/Cart";

function App() {
    return (
        <>
            <Cart />
            <Header />
            <Main />
        </>
    );
}

export default App;
