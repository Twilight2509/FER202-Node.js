import Login from "./components/Login";
import RecipesList from "./components/RecipesList";
import { BrowserRouter  as Router, Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Protected>
              <RecipesList />
            </Protected>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
