import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Projects } from "./pages/Projects";
import { Writing } from "./pages/Writing";
import { Layout } from "./pages/Layout";
import EthMail from "./pages/Projects/ethMail";

function App() {
  return (
    <div style={{fontFamily: "monospace", fontSize: "1rem"}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Homepage />} />
          <Route path="writing" element={<Writing />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/eps" element={<EthMail/>} />
          <Route path="*" element={<>404 this don't exist, mang</>} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
