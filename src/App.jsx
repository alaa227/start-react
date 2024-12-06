import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import PORTFOLIO from "./components/PORTFOLIO/PORTFOLIO";
import CONTACT from "./components/CONTACT/CONTACT";
import Layout from "./components/Layout/Layout";

function App() {
   let bl7 = createHashRouter([
     {
       path: "",
       element: <Layout />,
       children: [
         { index: true, element: <Home /> },
         { path: "about", element: <About /> },
         { path: "port", element: <PORTFOLIO /> },
         { path: "gal", element: <CONTACT /> },
       ],
     },
   ]);

  return (
    <>
   
      <RouterProvider router={bl7}></RouterProvider>
    </>
  );
}

export default App;
