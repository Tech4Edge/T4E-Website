import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("../Pages/Home"));
const Contact = lazy(() => import("../Pages/Contact"));
const Services = lazy(() => import("../Pages/Services"));
const Careers = lazy(() => import("../Pages/Careers"));
const Admin = lazy(() => import("../Pages/Admin"));

const Router = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] w-full flex items-center justify-center bg-white px-4">
          <p className="text-sm text-(--color-gray-600) cabin-400">Loading page...</p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<Home />} />
        <Route
          path="*"
          element={
            <div className="min-h-[60vh] w-full flex flex-col items-center justify-center bg-white px-4 text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
              <p className="text-gray-600">Page not found</p>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
