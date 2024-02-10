import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Title } from "./components/Title";

function App() {
  return (
    <div id="total">
      <BrowserRouter>
        <Navbar></Navbar>
        <Title></Title>
        <br></br>
        <br></br>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
