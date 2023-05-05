import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout/Layout";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/header",
          element: <Header></Header>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
