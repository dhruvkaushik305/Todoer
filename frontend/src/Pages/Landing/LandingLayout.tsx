import React from "react";
import { Link } from "react-router-dom";
const LandingLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-3xl font-medium text-gray-600 md:text-4xl">
        A minimalist todo app
      </p>
      <p className="text-md text-gray-500 md:text-xl">
        Made with love by{" "}
        <a
          href="https://github.com/dhruvkaushik305"
          target="_blank"
          className="underline"
        >
          Dhruv Kaushik
        </a>
      </p>
      <Link to="/auth/login">
        <button className="rounded-md bg-gray-300 px-3 py-1">
          Give it a try?
        </button>
      </Link>
    </div>
  );
};
export default LandingLayout;
