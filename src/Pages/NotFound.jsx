import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-(--color-primary) mb-4 cabin-400">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-2 cabin-400">Page not found</h2>
      <p className="text-gray-600 mb-8 cabin-400">Sorry, we couldn't find the page you're looking for.</p>
      <Link
        to="/"
        className="bg-(--color-primary) hover:bg-(--color-primary-dark) text-white font-semibold px-6 py-3 rounded transition-all duration-300 shadow-lg hover:shadow-xl cabin-400"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
