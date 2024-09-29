import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Skills,
  Work,
} from "./components";

const App = () => {
  return (
    <main className="relative">
      <header>
        <Navbar />
      </header>
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
