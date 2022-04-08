import { render } from "react-dom";
import  "./index.css"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Navbar from "./componets/navbar";
import About from './pages/about';
import Contact from './pages/contact';
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
  </BrowserRouter>,
  rootElement
);

