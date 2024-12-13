import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Skills,
  Work,
} from "./components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <main className="relative">
      <ToastContainer />

      {/* Header */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default App;
