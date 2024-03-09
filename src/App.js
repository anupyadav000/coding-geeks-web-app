import Navbar from "./components/common/Navbar";
import "./app.css";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/home/Home";
import Course from "./components/course/Course";
import AboutUs from "./components/about/AboutUs";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar></Navbar>
          <hr bg="#FAFAFA" height="2px" box-shadow="5px 10px;"></hr>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="Courses" element={<Course />}></Route>
            <Route path="About-Us" element={<AboutUs />}></Route>
          </Routes>
          <Outlet></Outlet>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
