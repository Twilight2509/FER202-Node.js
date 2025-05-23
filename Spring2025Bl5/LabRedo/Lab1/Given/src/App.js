import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieProvider from "./context/MovieContext";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    return (
        <MovieProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </MovieProvider>
    );
};

export default App;
