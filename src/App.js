import Home from "./pages/Home";

import Register from "./pages/Register";
import React   from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Login from "./pages/Login";


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path = "/" element={<Login/>}></Route>
        </Routes>
        <Routes>
          <Route path = "/home" element={<Home/>}></Route>
        </Routes>
        <Routes>
          <Route path = "/register" element={<Register/>}></Route>
        </Routes>
      </Router>
  
      
      
    </div>
  );
}

export default App;
