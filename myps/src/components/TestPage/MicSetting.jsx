import Webcam from "react-webcam";
import { useEffect } from "react";
import clock from "../../assets/testPage/clock.svg";
import minus from "../../assets/testPage/minus.svg";
import plus from "../../assets/testPage/plus.svg";
import mic from "../../assets/testPage/mic.svg";
import camera from "../../assets/testPage/camera.svg";
import NoCamera from "../../assets/testPage/video-unavailable.svg";
import { useTestSetting } from "../context/TestSettingContext";
import CheckOption from "../common/CheckOption";
import { startRecording, stopRecording, isRecording } from "./audio/audio";

const MicSetting = () => {
  // const [examTime, setExamTime] = useState(12); // 시험 시간 기본값 12분
  // const [isCameraOn, setIsCameraOn] = useState(true); // 카메라 상태
  // const [isMicOn, setIsMicOn] = useState(false); // 마이크 상태
  const {
    examTime,
    setExamTime,
    isCameraOn,
    setIsCameraOn,
    isMicOn,
    setIsMicOn,
  } = useTestSetting();

  // 컴포넌트 마운트와 언마운트 시 마이크 상태 관리
  useEffect(() => {
    const storedMicState = sessionStorage.getItem("isMicOn") === "true";

    if (storedMicState) {
      // 마이크가 켜져있어야 하는 상태라면
      setIsMicOn(true);
      startRecording();
    } else {
      setIsMicOn(false);
      stopRecording();
    }

    // 클린업 함수 추가
    return () => {
      stopRecording();
    };
  }, []);

  const handleTimeChange = (increment) => {
    setExamTime((prevTime) => {
      const newTime = prevTime + increment;
      if (newTime < 1) return 1; // 최소 1분
      if (newTime > 20) return 20; // 최대 20분
      return newTime;
    });
  };

  // 카메라 상태 변경 핸들러 추가
  const handleCameraChange = (selectedOption) => {
    setIsCameraOn(selectedOption === "켜기");
  };

  // 마이크 테스트 버튼 클릭 핸들러
  const handleMicChange = (selectedOption) => {
    const shouldTurnOn = selectedOption === "켜기";
    // 현재 상태와 다를 때만 실행
    if (shouldTurnOn !== isMicOn) {
      setIsMicOn(shouldTurnOn);
      if (shouldTurnOn) {
        startRecording();
      } else {
        stopRecording();
      }
    }
  };

  return (
    <div className="flex flex-col gap-[1.6875rem] w-[41.125rem]">
      <div className=" w-[658px] h-[25.25rem] rounded-[0.625rem]">
        {/* 셀프캠 구현 */}
        {isCameraOn ? (
          <Webcam
            audio={false}
            width="100%"
            mirrored={true}
            className=" h-[25.25rem] rounded-[0.625rem] object-cover"
          />
        ) : (
          <div className="w-full h-full bg-cgray-950 rounded-[0.625rem] flex items-center justify-center text-p1 font-medium text-[rgba(217,224,228,0.60)]">
            <div className="flex flex-col justify-center items-center gap-3.5">
              <img className="w-10 h-10" src={NoCamera} />
              카메라가 비활성화되었습니다.
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col items-start gap-5">
        {/* 시험시간  */}
        <div className="flex items-center">
          <div className="flex gap-2 font-medium w-[9.25rem]">
            <img src={clock} className="w-6 h-6" /> 시험시간
          </div>
          <div className="flex items-center">
            <div
              className="flex justify-center items-center px-1 py-2.5 bg-cgray-50 border border-cgray-200 w-11 h-6 rounded-tl-a rounded-bl-aa cursor-pointer"
              onClick={() => handleTimeChange(-1)}
            >
              <img src={minus} />
            </div>
            <div className="flex justify-center px-2.5 border-t border-b border-t-cgray-200 border-b-cgray-200 text-p1 font-medium w-[5.5rem] h-6 ">
              {examTime}분
            </div>
            <div
              className="flex justify-center items-center p-1 bg-cgray-50 border border-cgray-200 w-11 h-6 rounded-tr-aa rounded-br-aa cursor-pointer"
              onClick={() => handleTimeChange(1)}
            >
              <img src={plus} />
            </div>
          </div>
          <div className="ml-5 text-cgray-950 text-p2">
            시험시간 이후,{" "}
            <span className="font-medium text-b">자동으로 시험이 종료</span>
            됩니다.
          </div>
        </div>
        {/* 마이크  */}
        <div className="flex">
          <div className="flex gap-2 font-medium w-[9.25rem]">
            <img src={mic} className="w-6 h-6" /> 마이크
          </div>
          <div className="flex gap-8">
            <CheckOption
              options={["켜기", "끄기 (채팅으로 문진)"]}
              isMultiple={false}
              onChange={handleMicChange}
              defaultCheckedIndex={[isMicOn ? 0 : 1]}
            />
          </div>
        </div>
        {/* 오디오 비주얼라이저 */}
        <div className="flex gap-7">
          <div className="flex justify-center items-center px-1 py-2 bg-violet-25 text-p1 text-violet-900 self-center w-[7.5rem] h-8 rounded-aa">
            마이크 테스트
          </div>
          {/* 볼륨 미터 바 */}
          <div className="flex gap-[2px]">
            {[...Array(45)].map((_, index) => (
              <div key={index} className="volumeBar w-1 h-8 bg-cgray-100" />
            ))}
          </div>
        </div>
        {/* 셀프캠  */}
        <div className="flex">
          <div className="flex gap-2 font-medium w-[9.25rem]">
            <img src={camera} className="w-6 h-6" /> 셀프캠
          </div>
          <div className="flex gap-8">
            <CheckOption
              options={["켜기", "끄기 (녹화본 제공X)"]}
              isMultiple={false}
              onChange={handleCameraChange}
              defaultCheckedIndex={[isCameraOn ? 0 : 1]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MicSetting;
