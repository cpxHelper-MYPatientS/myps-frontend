import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import testStartAudio from "../../../public/assets/testAudio/testStart.mp3";
import ProgressBar from "./ProgressBar";
import SituationInstruction from "./SituationInstruction";
const TestInfoView = () => {
  const navigate = useNavigate();
  // const [playTestStart] = useSound(testStartAudio);
  const handleSkipClick = () => {
    navigate(`/test`);
    // playTestStart();
  };
  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-custom2 w-[75rem] h-[46.5625rem] rounded-bb">
      <div className="flex flex-col gap-[3.75rem] w-[67.5rem]">
        <div className="flex flex-col">
          <div className="flex flex-col items-center py-12 gap-6 bg-background rounded-tl-bb rounded-tr-bb  h-[30.25rem]">
            <SituationInstruction />
          </div>

          {/* 여기 프로그레스 바 들어갈 자리  */}
          <ProgressBar />
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-p1 text-violet-600 font-medium">
          1분 후 자동으로 시험이 시작됩니다.
          <button
            className="px-8 py-4 text-t1 font-bold bg-violet-600 text-white w-[9.125rem] rounded-[6.25rem]"
            onClick={handleSkipClick}
          >
            SKIP
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestInfoView;
