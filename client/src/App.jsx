import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Trainers from "./pages/Trainers";
import TrainerDetails from "./pages/TrainerDetails";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
        element: <Pricing />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
