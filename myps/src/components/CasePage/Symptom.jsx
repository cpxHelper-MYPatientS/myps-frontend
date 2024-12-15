import { useState } from "react";
import arrowIcon from "../../assets/casePage/arrow-back.svg";
import ToggleCase from "./ToggleCase";
import QuestionInstruction from "../TestPage/QuestionInstruction";
import DefaultModal from "../common/DefaultModal";
import useModal from "../../hooks/useModal";
import {
  CheckButton,
  MakeButton,
  CompleteRate,
  CompletePatientNum,
} from "./SymptomButton";
import CompleteRateDetail from "./CompleteRateDetail";
const Symptom = ({ title }) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isRateHovered, setIsRateHovered] = useState(false);
  const { activeModal, openModal, closeModal } = useModal();
  const handleToggleClick = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <div className="relative">
      <div className="relative flex items-center px-5 py-8 bg-white shadow-custom2 w-[75rem] h-[6.5rem] rounded-[0.625rem]">
        <span className="text-t1 font-bold text-center w-[16.5625rem]">
          {title}
        </span>
        <CheckButton onClick={() => openModal("question")} />
        <MakeButton />
        <div className="relative">
          <CompleteRate onHover={setIsRateHovered} />
          {isRateHovered && (
            <div className="absolute top-14 left-[-5rem] z-30">
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
        className={`overflow-hidden transition-all duration-500 ${
          isToggleOpen ? "animate-slide-down" : "animate-slide-up"
        }`}
      >
        {isToggleOpen && (
          <div className="flex flex-col justify-end mt-2 px-7 py-10 bg-white shadow-custom2 border-t border-gray-200 w-[75rem] h-[49.1875rem] rounded-[0.625rem]">
            <div className="flex gap-7">
              <ToggleCase isDefault={true} />
              <ToggleCase isDefault={false} />
            </div>
          </div>
        )}
      </div>
      {activeModal === "question" && (
        <DefaultModal
          onCloseClick={closeModal}
          width="w-[46.5rem] min-h-[36.1875rem]"
        >
          <QuestionInstruction />
        </DefaultModal>
      )}
    </div>
  );
};
export default Symptom;
