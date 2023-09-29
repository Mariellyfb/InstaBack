import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import { Login } from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Upload from "./pages/Upload";
import { PostUser } from "./pages/PostUser";
import AuthToken from "./auth/AuthToken";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        index
        element={
          <AuthToken>
            <Home />
          </AuthToken>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route
        path="posts"
        element={
          <AuthToken>
            <Upload />
          </AuthToken>
        }
      />
      <Route path="posts/:id" element={<PostUser />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
