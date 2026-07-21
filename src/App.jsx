import { useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router";
import "./App.css";
import Router from "./router/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      <Router />
      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(loaderTimer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
