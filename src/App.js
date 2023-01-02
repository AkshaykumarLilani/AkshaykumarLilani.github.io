import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "G-HT8SXNYQYC",
};

TagManager.initialize(tagManagerArgs);

function App() {
  return <Home />;
}

export default App;
