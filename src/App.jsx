import { BrowserRouter } from "react-router";
import "./App.css";
import Router from "./router/Router"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return <>
  <BrowserRouter>
  <Navbar />
  <Router />
  <Footer />
  </BrowserRouter>
  </>;
}

export default App;
