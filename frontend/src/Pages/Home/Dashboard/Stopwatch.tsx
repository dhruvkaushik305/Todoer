import React from "react";
import { BiReset } from "react-icons/bi";
import { FaPause, FaPlay } from "react-icons/fa";
import { RxResume } from "react-icons/rx";
import { useRecoilState } from "recoil";
import { isRunningAtom, timeAtom } from "../../../store/stopwatch";
interface PauseButtonProps {
  onClick: () => void;
}
const PauseButton: React.FC<PauseButtonProps> = React.memo(({ onClick }) => {
  return (
    <button onClick={onClick}>
      <FaPause className="size-4" />
    </button>
  );
});
const Stopwatch: React.FC = () => {
  const [time, setTime] = useRecoilState(timeAtom);
  const [isRunning, setIsRunning] = useRecoilState(isRunningAtom);
  const handlePause = React.useCallback(() => {
    setIsRunning(false);
  }, []);
  return (
    <div className="flex items-center justify-center gap-3 p-1">
      {!isRunning && time > 0 && (
        <button onClick={() => setTime(0)}>
          <BiReset className="size-6" />
        </button>
      )}
      <p className="font-semi-bold text-2xl md:text-3xl">
        {Math.floor(time / 3600)}:{Math.floor((time % 3600) / 60)}:{time % 60}
      </p>
      {isRunning ? (
        <PauseButton onClick={handlePause} />
      ) : time > 0 ? (
        <div className="flex gap-2">
          <button onClick={() => setIsRunning(true)}>
            <RxResume className="size-6" />
          </button>
        </div>
      ) : (
        <button onClick={() => setIsRunning(true)}>
          <FaPlay className="size-4" />
        </button>
      )}
    </div>
  );
};
export default Stopwatch;
