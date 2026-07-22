import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

const Home = lazy(() => import("../Pages/Home"));
const Contact = lazy(() => import("../Pages/Contact"));
const Services = lazy(() => import("../Pages/Services"));
const Careers = lazy(() => import("../Pages/Careers"));
const Admin = lazy(() => import("../Pages/Admin"));
const About = lazy(() => import("../Pages/About"));
const PrivacyPolicy = lazy(() => import("../Pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("../Pages/TermsAndConditions"));
const SecurityCompliance = lazy(() => import("../Pages/SecurityCompliance"));
const CookieSettings = lazy(() => import("../Pages/CookieSettings"));
const LegalNotice = lazy(() => import("../Pages/LegalNotice"));
const NotFound = lazy(() => import("../Pages/NotFound"));

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
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/security" element={<SecurityCompliance />} />
        <Route path="/cookies" element={<CookieSettings />} />
        <Route path="/legal" element={<LegalNotice />} />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
