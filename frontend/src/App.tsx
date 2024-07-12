import NavbarLayout from "./Pages/Navbar/NavbarLayout";
import AppRoutes from "./Pages/AppRoutes";
import useTimer from "./Hooks/useTimer";
import React from "react";
const App: React.FC = () => {
  useTimer();
  return (
    <div className="flex h-screen w-screen flex-col gap-5 overflow-y-auto">
      <NavbarLayout />
      <div className="flex w-full grow flex-col items-center justify-center pb-[1rem]">
        <AppRoutes />
      </div>
    </div>
  );
};
export default App;
