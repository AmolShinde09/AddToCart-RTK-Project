import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./Components/Home";
import { Cart } from "./Components/Cart";
import {CartStore} from "./StoreMange/Store/Store.js";

function App() {
  return (
    <>
      <Provider store={CartStore}>
      <BrowserRouter>
        {/* <h1>Welcome tn AddToCart RTK Project </h1> */}
        <Routes>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
