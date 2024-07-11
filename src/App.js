import "./App.css";
import "rsuite/dist/rsuite.min.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route
          path="*"
          element={
            <div>
              <h2>Error in Page</h2>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
