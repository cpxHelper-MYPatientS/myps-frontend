import { useState } from "react";
import arrowIcon from "../../assets/casePage/arrow-back.svg";
import ToggleCase from "./ToggleCase";
import {
  CheckButton,
  MakeButton,
  CompleteRate,
  CompletePatientNum,
} from "./SymptomButton";
const Symptom = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const handleToggleClick = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <div className="relative z-10">
      <div className="relative z-10 flex items-center px-5 bg-white shadow-custom2 w-[1200px] h-[104px] rounded-[10px]">
        <span className="text-t1 font-bold text-center w-[16.5625rem]">
          가슴통증
        </span>
        <CheckButton />
        <MakeButton />
        <CompleteRate />
        <CompletePatientNum />
        <img
          className={`ml-[76px] cursor-pointer transform ${
            isToggleOpen ? "rotate-180" : ""
          }`}
          src={arrowIcon}
          onClick={handleToggleClick}
        />
      </div>
      {/* 토글 겹침 구현 안된 상태  */}
      <div
        className={`overflow-hidden ${
          isToggleOpen ? "animate-slide-down" : "animate-slide-up"
          //   isToggleOpen ? "animate-slide-down" : ""
        }`}
      >
        {isToggleOpen && (
          <div className="flex flex-col justify-end px-7 py-10 bg-white border-t border-gray-200 w-[1200px] h-[787px] rounded-[10px]">
            <div className="flex gap-7">
              <ToggleCase isDefault={true} />
              <ToggleCase isDefault={false} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Symptom;
