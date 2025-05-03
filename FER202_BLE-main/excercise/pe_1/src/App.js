import ListProduct from "./components/ListProduct";
import { BrowserRouter  as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListProduct />} /> 
        <Route path="/product/:id" element={<ProductDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;
