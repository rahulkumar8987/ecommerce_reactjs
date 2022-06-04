import Product from "./home/Product";
import Homepage from "./home/Homepage";
import ProductList from "./home/ProductList";
import Register from "./home/Register";
import Login from "./home/Login";
import Cart from "./home/Cart";

function App() {
  return (
    <>
      <Homepage />
      <Login />
      <Product />
      <Register />
      <ProductList />
      <Cart />
    </>
  );
}

export default App;
