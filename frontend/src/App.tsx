import React from "react";
import NavbarLayout from "./Pages/Navbar/NavbarLayout";
import { useRecoilState, useRecoilValue } from "recoil";
import { isRunningAtom, timeAtom } from "./store/stopwatch";
import AppRoutes from "./Pages/AppRoutes";
function App() {
  const timeIntervalRef = React.useRef<NodeJS.Timeout | undefined>(undefined);
  const [time, setTime] = useRecoilState(timeAtom);
  const isRunning = useRecoilValue(isRunningAtom);
  React.useEffect(() => {
    if (isRunning) {
      timeIntervalRef.current = setInterval(
        () => setTime((prevTime) => prevTime + 1),
        1000,
      );
    }
    return () => clearInterval(timeIntervalRef.current);
  }, [isRunning, setTime]);
  React.useEffect(() => {
    if (time === 0) return;
    document.title = `Time running ${Math.floor(time / 3600)}:${Math.floor(
      (time % 3600) / 60,
    )}:${time % 60}`;
  }, [time]);
  return (
    <div className="flex h-screen w-screen flex-col gap-5 overflow-y-auto">
      <NavbarLayout />
      <div className="flex w-full grow flex-col items-center justify-center pb-[1rem]">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
