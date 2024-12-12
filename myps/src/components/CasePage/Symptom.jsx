import { useState } from "react";
import arrowIcon from "../../assets/casePage/arrow-back.svg";
import ToggleCase from "./ToggleCase";
import {
  CheckButton,
  MakeButton,
  CompleteRate,
  CompletePatientNum,
} from "./SymptomButton";
import CompleteRateDetail from "./CompleteRateDetail";
const Symptom = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isRateHovered, setIsRateHovered] = useState(false);
  const handleToggleClick = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <div className="relative z-10">
      <div className="relative z-20 flex items-center px-5 bg-white shadow-custom2 w-[75rem] h-[6.5rem] rounded-[0.625rem]">
        <span className="text-t1 font-bold text-center w-[16.5625rem]">
          가슴통증
        </span>
        <CheckButton />
        <MakeButton />
        <div className="relative">
          <CompleteRate onHover={setIsRateHovered} />
          {isRateHovered && (
            <div className="absolute top-14 left-[-5rem]">
              <CompleteRateDetail isHovered={isRateHovered} />
            </div>
          )}
        </div>
        <CompletePatientNum />
        <img
          className={`ml-[4.75rem] cursor-pointer transform ${
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
        }`}
      >
        {isToggleOpen && (
          <div className="flex flex-col justify-end px-7 py-10 bg-white shadow-custom2 border-t border-gray-200 w-[75rem] h-[49.1875rem] rounded-[0.625rem]">
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
