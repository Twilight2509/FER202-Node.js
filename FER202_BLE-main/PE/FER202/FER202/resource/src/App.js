import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './components/List';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />}/>
        <Route path='/products/:id' element={<ProductDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;
