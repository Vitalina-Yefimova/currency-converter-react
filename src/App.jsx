import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConverterPage from "./pages/ConverterPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/converter" element={<ConverterPage />} />
      </Routes>
    </Router>
  );
}
