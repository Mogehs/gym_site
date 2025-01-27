import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Trainers from "./pages/Trainers";
import TrainerDetails from "./pages/TrainerDetails";
import Footer from "./components/Footer";
import Hero from "./components/pricing/Hero";

const MainLayout = () => (
  <div className="lg:mx-auto lg:max-w-7xl">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/trainers",
        element: <Trainers />,
      },
      {
        path: "/trainer-details",
        element: <TrainerDetails />,
      },
      {
        path: "/pricing",
        element: <Hero />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
