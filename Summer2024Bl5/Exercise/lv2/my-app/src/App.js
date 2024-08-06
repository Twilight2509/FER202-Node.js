import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import L1 from './component/Lesson1';
import L2 from './component/Lesson2';
import L3 from './component/Lesson3';
import L4 from './component/Lesson4';
import L5 from './component/Lesson5';
import L6 from './component/Lesson6';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<L1 />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
