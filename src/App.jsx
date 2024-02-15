import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Title } from "./components/Title";
import { EmailForm } from "./components/EmailForm";
import { LeafTest } from "./components/LeafTest";
import { RiveTest } from "./components/RiveTest";
import { LeafAnimation } from "./components/LeafAnimation";

function App() {
  return (
    <div id="total">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rive" element={<RiveTest />} />
          <Route path="/email" element={<EmailForm />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
