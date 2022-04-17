import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Checkout from "./components/Checkout/Checkout";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/checkout" element={<Checkout></Checkout>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
