import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
