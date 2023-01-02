import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import REACTGA from "react-ga";
const TRACKING_ID = "347907347";
REACTGA.initialize(TRACKING_ID);

function App() {
  return <Home />;
}

export default App;
