import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pilot from "./pages/Pilot";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pilot" element={<Pilot />} />
      </Routes>
    </BrowserRouter>
  );
}
