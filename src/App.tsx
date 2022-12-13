import "./App.css";
import { createContext } from "react";
import { ThemeColor } from "./components/ThemeColor";
import { ThemeProvider } from "./context/ThemeContext";
import TransitionReactHook from "./components/TransitionReactHook";
import TynUseReducer from "./components/TynUseReducer";

interface MyContext {
  color: string;
}

export const ThemeContext = createContext<MyContext | null>(null);

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <TynUseReducer />
          <h1 className="home-page">Home page</h1>
          <ThemeColor />
          <TransitionReactHook />
        </header>
      </div>
    </ThemeProvider>
  );
}
export default App;
