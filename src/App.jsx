import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomThemeProvider } from "./components/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./components/AppLayout";
import { Box } from "@mui/material";

const ExchangeRates = lazy(() => import("./pages/ExchangeRates"));

const Loading = () => (
  <Box>
    <h2>Loading Exchange Rates...</h2>
  </Box>
);

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
    element: (
      <Suspense fallback={<Loading />}>
        <ExchangeRates />
      </Suspense>
    ),
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
