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
import { TestPage } from "./components/TestPage";
import { Italian } from "./components/Italian";

function App() {
  return (
    <div id="total">
      <BrowserRouter>
        <Navbar></Navbar>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rive" element={<RiveTest />} />
          <Route path="/re" element={<RiveEvents />} />
          <Route path="/modernmarkets" element={<TestPage />} />
          <Route path="/italian" element={<Italian />} />
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
