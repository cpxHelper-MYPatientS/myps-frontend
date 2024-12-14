import { useState, useEffect } from "react";
import handwash from "../../assets/testPage/handwash.svg";
import timer from "../../assets/testPage/timer.svg";
import hint from "../../assets/testPage/hint.svg";
import DefaultModal from "../common/DefaultModal";
import useModal from "../../hooks/useModal";
import SituationInstruction from "./SituationInstruction";
import QuestionInstruction from "./QuestionInstruction";

const TestNavBar = ({ onHandWash, formatTime }) => {
  const [showTimer, setShowTimer] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0); // 경과 시간 저장
  const { activeModal, openModal, closeModal } = useModal();

  // 시간재는 함수
  // 컴포넌트가 마운트될 때 타이머 시작
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    // 컴포넌트가 언마운트될 때 타이머 정리
    return () => clearInterval(interval);
  }, []);

  const activities = [
    {
      img: handwash,
      text: "손소독",
      onClick: () => {
        console.log("손소독 클릭됨");
        onHandWash(elapsedTime);
      },
    },
    {
      img: timer,
      text: "소요시간",
      onClick: () => {
        setShowTimer(true);
        setTimeout(() => setShowTimer(false), 4000); // 4초 후 토스트 메시지 사라짐
      },
    },
    {
      img: hint,
      text: "상황지침 확인",
      onClick: () => {
        openModal("situation");
      },
    },
    {
      img: hint,
      text: "힌트 보기",
      onClick: () => {
        openModal("hint");
      },
    },
  ];
  return (
    <>
      <div className="relative flex justify-between items-center px-9 py-3 border bg-nav border-nav shadow-custom4 backdrop-blur-[1.1719rem] w-[43.375rem] h-16 rounded-bb">
        {activities.map((activity, index) => (
          <div key={index} className="flex justify-between items-center">
            <div
              className="flex items-center gap-2 text-p1 text-white font-medium cursor-pointer"
              onClick={activity.onClick}
            >
              <img className="w-5 h-5" src={activity.img} />
              {activity.text}
            </div>
            {index < activities.length - 1 && (
              <div className="w-[1px] h-3.5 bg-white ml-[2.4169rem]"></div>
            )}
          </div>
        ))}
        {showTimer && (
          <div className="absolute top-[-70px] left-1/2 px-9 py-3 transform -translate-x-1/2 bg-nav border border-nav shadow-custom4 backdrop-blur-[18.75px] text-white text-b1 rounded-bb">
            소요시간 {formatTime(elapsedTime)}
          </div>
        )}
      </div>
      {activeModal === "situation" && (
        <DefaultModal onCloseClick={closeModal} width="w-[61.875rem]">
          <SituationInstruction />
        </DefaultModal>
      )}
      {activeModal === "hint" && (
        <DefaultModal
          onCloseClick={closeModal}
          width="w-[46.5rem] min-h-[36.1875rem]"
        >
          <QuestionInstruction />
        </DefaultModal>
      )}
    </>
  );
};
export default TestNavBar;
