import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RestaurantDetails from "./Components/RestaurantDetails";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
       <div>
          <Header/>

          <Router>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/:id" element={<RestaurantDetails/>}/>   
              <Route path="/About" element={<About/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              </Routes>
          </Router>

           <Footer/>

        </div>
    )
}
export default App;