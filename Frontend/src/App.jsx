import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";

// Import of Components
const Home = lazy(() => import("./pages/Home/Home"));
const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
const User = lazy(() => import("./pages/User/User"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const router = createBrowserRouter([
  {
    element: (
      // We put the Layout component in first, as the root element of the application
      <Suspense fallback={<div>Loading...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      // The children of the Layout component are the pages of the application
      {
        path: "/",
        index: true, // This is the default page
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/sign-in",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "/user/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <User />
          </Suspense>
        ),
      },

      {
        path: "*",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  // router contains all pages routes and RouterProvider is used to display them
  return <RouterProvider router={router} />;
}

export default App;
