import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isRunningAtom, timeAtom } from "../store/stopwatch";

function useTimer() {
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
    if (time === 0) {
      document.title = "Todoer - Its what you do";
    } else {
      document.title = `Time running ${Math.floor(time / 3600)}:${Math.floor(
        (time % 3600) / 60,
      )}:${time % 60}`;
    }
  }, [time]);
}
export default useTimer;
