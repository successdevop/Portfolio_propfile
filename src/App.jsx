import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Project"));
const Contact = lazy(() => import("./pages/Contact"));
const Nomatch = lazy(() => import("./pages/Nomatch"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </Suspense>
  );
}

export default App;
