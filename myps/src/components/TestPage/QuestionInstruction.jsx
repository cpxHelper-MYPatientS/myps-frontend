import { useState } from "react";
import questionJson from "../../../public/assets/patientData/subject3/cc10/questionList.json";

const QuestionInstruction = () => {
  const [activeTab, setActiveTab] = useState("주호소 관련 필수 확인 사항");
  const tabs = [
    "주호소 관련 필수 확인 사항",
    "동반증상",
    "관련 병력",
    "사회/가족/여성력",
  ];
  const data = questionJson;
  const questionData = {
    "주호소 관련 필수 확인 사항": data["주호소 관련 필수 확인 사항"].map(
      (item) => ({
        item,
      })
    ),
    동반증상: data.동반증상.map((item) => ({
      item,
    })),
    "관련 병력": data["관련 병력"].map((item) => ({
      item,
    })),
    "사회/가족/여성력": data["사회/가족/여성력"].map((item) => ({
      item,
    })),
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="px-6 text-h2 font-bold">문진항목</div>
        <div className="flex px-4 gap-11 shadow-custom1">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-2 py-1 text-b2 ${
                activeTab === tab
                  ? "border-b-2 border-violet-600 text-violet-600 font-bold"
                  : "text-cgray-500 font-normal"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="px-7">
        {questionData[activeTab].map((item, index) => (
          <div
            key={index}
            className="py-1 text-b2 break-words whitespace-normal flex"
          >
            <span className="flex-shrink-0">•&nbsp;</span>
            <span>{item.item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default QuestionInstruction;
