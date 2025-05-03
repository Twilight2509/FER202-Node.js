import Rescipes from './components/Rescipes';
import { BrowserRouter  as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import RecipesDetail from './components/RecipesDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rescipes />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/recipes/:id" element={<RecipesDetail />} /> 
    </Routes>
  </Router>
  );
}

export default App;
