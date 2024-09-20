import { Route, Routes } from "react-router-dom";
import { About, Footer, Hero, Navbar, Skills, Work } from "./components";
import { Eksport, PostProduction, PreProduction, Production } from "./pages";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/pre-production" element={<PreProduction />} />
        <Route path="/production" element={<Production />} />
        <Route path="/post-production" element={<PostProduction />} />
        <Route path="/eksport" element={<Eksport />} />
      </Routes>
      <About />
      <Skills />
      <Work />
      <Footer />
    </main>
  );
};

export default App;
