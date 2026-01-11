import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MakeAiMovies from "./pages/MakeAiMovies";
import LearnToCodeQuick from "./pages/LearnToCodeQuick.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/make-ai-movies" element={<MakeAiMovies />} />
        <Route path="/learn-to-code-quick" element={<LearnToCodeQuick />} />
      </Routes>
    </BrowserRouter>
  );
}
