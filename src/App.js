import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Router } from "./Roots/Roots";

function App() {
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
