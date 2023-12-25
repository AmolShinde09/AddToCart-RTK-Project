import { Home } from "./Components/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from "./Components/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <h1>Welcome tn AddToCart RTK Project </h1> */}
        <Routes>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
