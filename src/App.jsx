import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { GoToEngage } from "./components/GoToEngage";
import { GoToRx } from "./components/GoToRx";
import { AppStoreMimic } from "./components/AppStoreMimic";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div id="total">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acquire" element={<AppStoreMimic />} />
          <Route path="/engage" element={<GoToEngage />} />
          <Route path="/digital_conversion" element={<AppStoreMimic />} />
          <Route path="/rx_link" element={<GoToRx />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
