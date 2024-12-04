import { useState } from "react";
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
const TestView = () => {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCamOn, setIsCamOn] = useState(true);

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

  return (
    <div className="flex gap-5">
      {/* 왼쪽창  */}
      <div className="flex flex-col w-[793px] shadow-custom2">
        <div
          className="flex justify-center items-end pb-[0.875rem] w-full h-[500px] rounded-tl-bb rounded-tr-bb"
          style={{ backgroundImage: `url(${patientImg})` }}
        >
          <TestNavBar />
        </div>
        {/* 채팅창 들어갈 자리 */}
        <Chat isMicOn={isMicOn} />
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
        <ButtonComponent text="신체 검진 시작" />
      </div>
    </div>
  );
};
export default TestView;
