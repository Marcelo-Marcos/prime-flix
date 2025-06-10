import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Erro from "./pages/Erro";

function RoutersApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />

        <Route path="*" element={<Erro />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutersApp;
