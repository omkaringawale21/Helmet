import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import LastPage from "./pages/LastPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/blog-a"} />} />
        <Route path="/blog-a" element={<FrontPage />} />
        <Route path="/blog-b" element={<LastPage />} />
      </Routes>
    </Router>
  );
}

export default App;
