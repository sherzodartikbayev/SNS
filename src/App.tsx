// React Router Dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Pages
import { Eksport, PostProduction, PreProduction, Production } from "./pages";
// Layout
import RootLayout from "./layout/root-layout";
import HeroLayout from "./layout/hero-layout";

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<HeroLayout />} />
        <Route path="/pre-production" element={<PreProduction />} />
        <Route path="/production" element={<Production />} />
        <Route path="/post-production" element={<PostProduction />} />
        <Route path="/eksport" element={<Eksport />} />
      </Route>
    )
  );

  return (
    <main className="overflow-hidden relative">
      <RouterProvider router={routes} />
    </main>
  );
};

export default App;
