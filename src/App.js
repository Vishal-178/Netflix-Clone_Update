import { Home, Browser, SignIn, SignUp } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuthListener } from "./hooks";

function App() {
  const { user } = useAuthListener();
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/browser"
            element={user ? <Browser /> : <Navigate to="/" />}
          />
          <Route
            path="/"
            element={user ? <Navigate to="/browser" replace /> : <Home />}
          />
          <Route
            path="/signin"
            element={user ? <Navigate to="/browser" /> : <SignIn />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/browser" /> : <SignUp />}
          />
          <Route
            path="*"
            element={user ? <Navigate to="/browser" /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}
export default App;
