//pages
import Home from "./pages/ Home";
import Analysis from "./pages/Analysis";
import CalculatorPage from "./pages/CalculatorPage";

//routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Analysis", element: <Analysis /> },
  { path: "/Calculator", element: <CalculatorPage /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
