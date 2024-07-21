import "./App.css";
import "rsuite/dist/rsuite.min.css";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { ProfileProvider } from "./context/profile.context";
import Chat from "./pages/Chat";
import { RoomsProvider } from "./context/room.context";

function App() {
  return (
    <div className="App">
      <ProfileProvider>
        <RoomsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/chats/:chatID" element={<Chat />} />
            <Route
              path="*"
              element={
                <div>
                  <h2>Error in Page</h2>
                </div>
              }
            />
          </Routes>
        </RoomsProvider>
      </ProfileProvider>
    </div>
  );
}

export default App;
