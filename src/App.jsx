import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import LandingPage from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Auth from "./pages/auth";
import Link from "./pages/link";
import RedirectLink from "./pages/redirect-link";
import UrlProvider from "./context";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage></LandingPage>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/auth",
        element: <Auth></Auth>,
      },
      {
        path: "/link/:id",
        element: <Link></Link>,
      },
      {
        path: "/:id",
        element: <RedirectLink></RedirectLink>,
      },
    ],
  },
]);

function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router}></RouterProvider>
    </UrlProvider>
  );
}

export default App;
