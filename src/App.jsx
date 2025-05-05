import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomThemeProvider } from "./components/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import ExchangeRates from "./pages/ExchangeRates";
import AppLayout from "./components/AppLayout";

const approute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
    ],
  },
  {
    path: "/exchange_rates_live",
    element: <ExchangeRates />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <CustomThemeProvider>
      <RouterProvider router={approute} />
    </CustomThemeProvider>
  );
}

export default App;
