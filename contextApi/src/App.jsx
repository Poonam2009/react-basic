import "./App.css";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import UserContextProvider from "./context/UserContext/UserContextProvider";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext/ThemeContext";

function App() {
  return (
    <UserContextProvider>
      <ThemeProvider>
        <h1>Context API</h1>
        <Login />
        <Profile />
        <ThemeToggle />
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
