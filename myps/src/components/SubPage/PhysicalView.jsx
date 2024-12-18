import React, { useState } from "react";

const PhysicalView = () => {
  const [selectedExam, setSelectedExam] = useState(0);
  const Exams = [
    "신체검진명1",
    "신체검진명2",
    "신체검진명3",
    "신체검진명4",
    "신체검진명5",
  ];
  return (
    <div className="flex gap-3 h-[38.75rem]">
      <div className="flex flex-col px-4 py-6 gap-3 w-[9.4375rem]">
        {Exams.map((exam, index) => (
          <span
            key={index}
            className={`text-p1 cursor-pointer ${
              selectedExam === index
                ? "text-violet-600 font-bold"
                : "font-medium text-b"
            }`}
            onClick={() => setSelectedExam(index)}
          >
            {exam}
          </span>
        ))}
      </div>
      <div className="flex justify-center items-center bg-white w-full">
        <span className="text-p1 text-cgray-500">준비중이에요!</span>
      </div>
    </div>
  );
};
export default PhysicalView;
