import { useState } from "react";
import clock from "../../assets/testPage/clock.svg";
import minus from "../../assets/testPage/minus.svg";
import plus from "../../assets/testPage/plus.svg";
import mic from "../../assets/testPage/mic.svg";
import camera from "../../assets/testPage/camera.svg";

import CheckOption from "../common/CheckOption";

const MicSetting = () => {
  const [examTime, setExamTime] = useState(12); // 시험 시간 기본값 12분

  const handleTimeChange = (increment) => {
    setExamTime((prevTime) => {
      const newTime = prevTime + increment;
      if (newTime < 1) return 1; // 최소 1분
      if (newTime > 20) return 20; // 최대 20분
      return newTime;
    });
  };

  return (
    <div className="flex flex-col items-start gap-5">
      {/* 시험시간  */}
      <div className="flex ">
        <div className="flex gap-2 font-medium w-[9.25rem]">
          <img src={clock} className="w-6 h-6" /> 시험시간
        </div>
        <div className="flex items-center">
          <div
            className="flex justify-center items-center px-1 py-2.5 bg-cgray-50 border border-cgray-200 w-11 h-6 rounded-tl-a rounded-bl-a cursor-pointer"
            onClick={() => handleTimeChange(-1)}
          >
            <img src={minus} />
          </div>
          <div className="flex justify-center px-2.5 border-t border-b border-t-cgray-200 border-b-cgray-200 text-p1 font-medium w-[8.375rem] h-6 ">
            {examTime}분
          </div>
          <div
            className="flex justify-center items-center p-1 bg-cgray-50 border border-cgray-200 w-11 h-6 rounded-tr-a rounded-br-a cursor-pointer"
            onClick={() => handleTimeChange(1)}
          >
            <img src={plus} />
          </div>
        </div>
      </div>
      {/* 마이크  */}
      <div className="flex ">
        <div className="flex gap-2 font-medium w-[9.25rem]">
          <img src={mic} className="w-6 h-6" /> 마이크
        </div>
        <div className="flex gap-8">
          <CheckOption
            options={["켜기", "끄기 (채팅으로 문진)"]}
            isMultiple={false}
          />
        </div>
      </div>
      {/* 오디오 비주얼라이저 */}
      <div className="w-[9.25rem]">
        <div className="flex justify-center items-center px-1 py-2 bg-violet-25 text-p1 text-violet-900 self-center w-[7.5rem] h-8 rounded-a">
          마이크 테스트
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
          />
        </div>
      </div>
    </div>
  );
};
export default MicSetting;
