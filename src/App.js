//Components
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Store from "./Components/Store/Store";
//Context
import ProductContextProvider from "./Context/ProductContextProvider";
import CartContextProvider from "./Context/CartContextProvider";
import Navbar from "./Components/Navbar/Navbar";
import ShopCart from "./Components/ShopCart/ShopCart";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="*" element={<Navigate replace to="/products" />} />
          <Route path="/products/:id" element={<ProductDetails/>}/>
          <Route path="/cart" element={<ShopCart/>}/>
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
