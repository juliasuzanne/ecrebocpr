import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { GoToEngage } from "./components/GoToEngage";
import { GoToRx } from "./components/GoToRx";
import { AppStoreMimic } from "./components/AppStoreMimic";
import { GoToAcquire } from "./components/GoToAcquire";
import { Footer } from "./components/Footer";
import { GoToDigital } from "./components/GoToDigital";

function App() {
  return (
    <div id="total">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acquire" element={<GoToAcquire />} />
          <Route path="/engage" element={<GoToEngage />} />
          <Route path="/digital_conversion" element={<GoToDigital />} />
          <Route path="/rx_link" element={<GoToRx />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
