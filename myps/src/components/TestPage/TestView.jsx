import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import patientImg from "../../assets/testPage/patient-image.png";
// import userVideo from "../../assets/testPage/user-image.png";
import micOn from "../../assets/testPage/mic-on.svg";
import micOff from "../../assets/testPage/mic-off.svg";
import camOn from "../../assets/testPage/cam-on.svg";
import camOff from "../../assets/testPage/cam-off.svg";
import TestNavBar from "./TestNavBar";
import Memo from "./Memo";
import ButtonComponent from "../common/ButtonComponent";
import Chat from "./Chat";
import { startRecording, stopRecording, isRecording } from "./audio/audio";

// formatTime 함수를 파일 상단에 정의
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

const TestView = () => {
  const navigate = useNavigate();
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);
  const [handWashLogs, setHandWashLogs] = useState([]);
  const [examStep, setExamStep] = useState(0);

  // 검진 단계별 버튼 텍스트와 채팅 메시지
  const examSteps = [
    {
      stage: 1,
      buttonText: "신체 검진 시작",
    },
    {
      stage: 2,
      buttonText: "신체 검진 결과 확인",
    },
    {
      stage: 3,
      buttonText: "환자 교육 시작",
    },
    { stage: 4, buttonText: "시험 종료" },
  ];

  // 마이크 버튼 클릭 핸들러
  const handleMicChange = () => {
    setIsMicOn(!isMicOn);
    console.log("isMicOn", isMicOn);
    if (!isMicOn) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  // 손소독 클릭시 시간과 함께 기록
  const handleHandWash = (time) => {
    setHandWashLogs((prev) => {
      const newLogs = [...prev, { timestamp: time }];
      return newLogs;
    });
  };
  // useEffect로 손소독 상태변화
  useEffect(() => {
    console.log("handWashLogs changed:", handWashLogs);
  }, [handWashLogs]);

  // 검진 단계 변경 핸들러
  const handleExamStep = () => {
    if (examStep < examSteps.length - 1) {
      // 현재 단계별 특정 로직 실행
      switch (examStep) {
        case 0: // 신체 검진 시작 버튼 누를 시
          handlePhysicalExamStart();
          break;
        case 1: // 신체 검진 결과 확인 버튼 누를 시
          handleShowPhysicalExamResult();
          break;
        case 2: // 환자 교육 시작 버튼 누를 시
          handleStartPatientEducation();
          break;
        default:
          break;
      }

      setExamStep((prev) => prev + 1);
    } else if (examStep === examSteps.length - 1) {
      handleExamComplete();
    }
  };

  // 각 단계별 핸들러 함수
  const handlePhysicalExamStart = () => {
    // 신체 검진 시작 시 필요한 로직
    console.log("신체 검진 시작");
  };

  const handleShowPhysicalExamResult = () => {
    // 신체 검진 결과 확인 시 필요한 로직
    console.log("신체 검진 결과 확인");
  };

  const handleStartPatientEducation = () => {
    // 환자 교육 시작 시 필요한 로직
    console.log("환자 교육 시작");
  };

  const handleExamComplete = () => {
    // 시험 종료 시 필요한 로직
    console.log("시험 종료");
    navigate(`/test/loading`);
  };

  return (
    <div className="flex gap-5">
      {/* 왼쪽창  */}
      <div className="flex flex-col w-[793px] shadow-custom2">
        <div
          className="flex justify-center items-end pb-[0.875rem] w-full h-[500px] rounded-tl-bb rounded-tr-bb"
          style={{ backgroundImage: `url(${patientImg})` }}
        >
          <TestNavBar onHandWash={handleHandWash} formatTime={formatTime} />
        </div>
        {/* 채팅창 들어갈 자리 */}
        <Chat
          isMicOn={isMicOn}
          handWashLogs={handWashLogs}
          formatTime={formatTime}
          stage={examStep}
        />
      </div>
      {/* 오른쪽 창 */}
      <div className="flex flex-col gap-6 w-[387px]">
        {/* <img className="h-[251px] rounded-bb" src={userVideo} /> */}
        <div className="relative flex items-center justify-center h-[251px] rounded-bb">
          {/* 셀프캠 구현 */}
          {isCamOn ? (
            <Webcam
              audio={false}
              width="100%"
              mirrored={true}
              className=" h-[15.6875rem] rounded-[0.625rem] object-cover"
            />
          ) : (
            <div className="w-full h-full bg-cgray-900 rounded-[0.625rem] flex items-center justify-center text-white">
              카메라가 비활성화되었습니다.
            </div>
          )}
          <div className="absolute bottom-5 flex gap-5 z-10">
            <button
              className="flex justify-center items-center p-2 border [background:rgba(255,255,255,0.20)] shadow-custom2_inset,0px_4px_4px_0px_rgba(255,255,255,0.13)_inset] backdrop-blur-[25px] border-solid border-[rgba(255,255,255,0.43)] w-10 h-10 rounded-full"
              onClick={handleMicChange}
            >
              <img className="w-6 h-6" src={isMicOn ? micOn : micOff} />
            </button>
            <button
              className="flex justify-center items-center p-2 border [background:rgba(255,255,255,0.20)] shadow-custom2_inset,0px_4px_4px_0px_rgba(255,255,255,0.13)_inset] backdrop-blur-[25px] border-solid border-[rgba(255,255,255,0.43)] w-10 h-10 rounded-full"
              onClick={() => setIsCamOn(!isCamOn)}
            >
              <img className="w-6 h-6" src={isCamOn ? camOn : camOff} />
            </button>
          </div>
        </div>
        <Memo />
        <ButtonComponent
          text={examSteps[examStep].buttonText}
          onClick={handleExamStep}
        />
      </div>
    </div>
  );
};

export default TestView;
