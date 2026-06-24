import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import {Login} from "./pages/Login.jsx";
import {Register} from "./pages/Register.jsx";

import Landing from "./pages/Landing.jsx";

function App(){
  return (
    <>
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/register" element={<Register />} />

      <Route path="/login" element={<Login />} />
    </Routes>

    {/* <Footer /> */}
    </BrowserRouter>
    </>

  );
}
export default App;