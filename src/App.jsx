import { useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router";
import "./App.css";
import Router from "./router/Router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      <Router />
      {!isAdmin && <Footer />}
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem("app_loaded");
  });

  useEffect(() => {
    if (isLoading) {
      const loaderTimer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("app_loaded", "true");
      }, 1800);

      return () => clearTimeout(loaderTimer);
    }
  }, [isLoading]);

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
