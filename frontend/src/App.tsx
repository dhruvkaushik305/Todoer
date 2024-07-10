import React from "react";
import NavbarLayout from "./Pages/Navbar/NavbarLayout";
import { useRecoilState, useRecoilValue } from "recoil";
import { isRunningAtom, timeAtom } from "./store/stopwatch";
import AppRoutes from "./Pages/AppRoutes";
function App() {
  let timeInterval: number | undefined = undefined;
  const [time, setTime] = useRecoilState(timeAtom);
  const isRunning = useRecoilValue(isRunningAtom);
  React.useEffect(() => {
    if (isRunning) {
      timeInterval = setInterval(
        () => setTime((prevTime) => prevTime + 1),
        1000,
      );
    }
    return () => clearInterval(timeInterval);
  }, [isRunning]);
  React.useEffect(() => {
    if (time === 0) return;
    document.title = `Time running ${Math.floor(time / 3600)}:${Math.floor(
      (time % 3600) / 60,
    )}:${time % 60}`;
  }, [time]);
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <NavbarLayout />
      <div className="flex h-full w-full grow flex-col items-center justify-center overflow-y-auto pb-[1rem] pt-[6rem]">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
