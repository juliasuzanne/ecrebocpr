import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Title } from "./components/Title";
import { EmailForm } from "./components/EmailForm";
import { LeafTest } from "./components/LeafTest";
import { RiveTest } from "./components/RiveTest";
import { LeafAnimation } from "./components/LeafAnimation";
import { FirstReceipt } from "./components/FirstReceipt";
import { SecondReceipt } from "./components/SecondReceipt";
import { ThirdReceipt } from "./components/ThirdReceipt";
import { RiveEvents } from "./components/RiveEvents";

function App() {
  return (
    <div id="total">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rive" element={<RiveTest />} />
          <Route path="/re" element={<RiveEvents />} />

          <Route path="/email" element={<EmailForm />} />
          <Route path="/test1" element={<FirstReceipt />} />
          <Route path="/test2" element={<SecondReceipt />} />
          <Route path="/test3" element={<ThirdReceipt />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
