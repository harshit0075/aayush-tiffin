// import "./styles.css";
import {BrowserRouter, Routes,Route} from "react-router-dom"
// import NavBar from "./Components/NavBar"

import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Product from "./Pages/Product"
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/product" element={<Product/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}
 export default App;