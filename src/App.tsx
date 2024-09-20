import { Route, Routes } from "react-router-dom";
import { Footer, Hero, Navbar } from "./components";
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
      <Footer />
    </main>
  );
};

export default App;
