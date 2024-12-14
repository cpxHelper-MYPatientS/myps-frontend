import { useState } from "react";
import closeIcon from "../../assets/feedbackPage/close.svg";
const ToggleNote = ({ title, description, isOpened = false, children }) => {
  const [isOpen, setIsOpen] = useState(isOpened);

  return (
    <div className="flex flex-col bg-white shadow-custom2 rounded-bb">
      {/* 토글 헤더 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between p-6 w-full text-left"
      >
        <div className="flex flex-col gap-2">
          <span className="text-b1 font-bold">{title}</span>
          <span className="text-cgray-700 font-medium text-p1">
            {description}
          </span>
        </div>
        {isOpen && <img src={closeIcon} alt="접기" />}
      </button>

      {/* 토글 컨텐츠 */}
      <div
        className={`overflow-hidden transition-all duration-500 w-full ${
          isOpen ? "animate-slide-down" : "animate-slide-up h-0"
        }`}
      >
        <div className="mt-2 px-6 mb-6 ">{children}</div>
      </div>
    </div>
  );
};

export default ToggleNote;
