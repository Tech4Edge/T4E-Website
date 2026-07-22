import React from "react";
import { Link } from "react-router";

const SecurityCompliance = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center bg-gray-50 px-4 text-center cabin-400">
      <h1 className="text-3xl md:text-4xl font-bold text-(--color-dark) mb-4">Security Compliance</h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Information about our security compliance is currently being updated. Please check back later.
      </p>
      <Link
        to="/"
        className="bg-(--color-primary) hover:bg-(--color-primary-dark) text-white font-semibold px-6 py-3 rounded transition-all duration-300 shadow-sm"
      >
        Go Home
      </Link>
    </div>
  );
};

export default SecurityCompliance;
