import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MakeAiMovies from "./pages/MakeAiMovies";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-ai-movies" element={<MakeAiMovies />} />
      </Routes>
    </BrowserRouter>
  );
}
