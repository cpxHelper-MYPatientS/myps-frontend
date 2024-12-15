import React, { useEffect, useState } from "react";
import patientJson from "../../../public/assets/patientData/subject3/cc10/patient/patient01.json";
import ToggleNote from "./ToggleNote";
const CaseSummary = () => {
  const data = patientJson;
  return (
    <ToggleNote
      title="CASE 요약"
      description="문진하지 않은 정보가 있는지 확인해보세요"
      isOpened={true}
    >
      <div className="flex flex-col gap-3 bg-background">
        {/* 감별진단 후보 */}
        <div className="flex flex-col gap-2 text-p2 ">
          <div className="px-2 py-1  bg-violet-50 text-violet-900 font-medium rounded-[0.25rem]">
            감별진단 후보
          </div>
          <div className="flex flex-col px-4 gap-2 text-p2 ">
            {data["감별진단 후보"].map((item, index) => (
              <span key={index}>
                {index + 1}. {item}
              </span>
            ))}
          </div>
        </div>
        {/* 검사계획 후보 */}
        <div className="flex flex-col gap-2 text-p2 ">
          <div className="px-2 py-1  bg-violet-50 text-violet-900 font-medium rounded-[0.25rem]">
            검사계획 후보
          </div>
          <div className="flex flex-col px-4 gap-2 text-p2">
            {data["검사계획 후보"].map((item, index) => (
              <span key={index}>
                {index + 1}. {item}
              </span>
            ))}
          </div>
        </div>
        {/* 치료계획 후보 */}
        <div className="flex flex-col gap-2 text-p2 ">
          <div className="px-2 py-1  bg-violet-50 text-violet-900 font-medium rounded-[0.25rem]">
            치료계획 후보
          </div>
          <div className="flex flex-col px-4 gap-2 text-p2">
            {data["치료계획 후보"].map((item, index) => (
              <span key={index}>
                {index + 1}. {item}
              </span>
            ))}
          </div>
        </div>
        {/* 기본 환자 정보 */}
        <div className="flex flex-col gap-2 text-p2 ">
          <div className="px-2 py-1  bg-violet-50 text-violet-900 font-medium rounded-[0.25rem]">
            기본 환자 정보
          </div>
          <div className="flex flex-col px-4 gap-2 font-bold ">
            {Object.entries(data["기본 환자 정보"]).map(([key, value]) => (
              <span key={key} className="flex gap-10">
                <span className="font-medium min-w-[120px] max-w-[120px] break-words whitespace-normal">
                  • {key}
                </span>
                <span className="font-light w-[180px]">{value}</span>
              </span>
            ))}
          </div>
        </div>
        {/* 주호소 관련 병력 */}
        <div className="flex flex-col gap-2 text-p2 ">
          <div className="px-2 py-1  bg-violet-50 text-violet-900 font-medium rounded-[0.25rem]">
            주호소 관련 병력
          </div>
          <div className="flex flex-col px-4 gap-2">
            {Object.entries(data["주호소 관련 병력"]).map(([key, value]) => (
              <span key={key} className="flex gap-10">
                <span className="font-medium min-w-[120px] max-w-[120px] break-words whitespace-normal">
                  {key}
                </span>
                <span className="font-light break-words whitespace-normal">
                  {value}
                </span>
              </span>
            ))}
          </div>
        </div>
        {/* 기타 병력 */}
        <div className="flex flex-col gap-2 text-p2 ">
          <div className="px-2 py-1  bg-violet-50 text-violet-900 font-medium rounded-[0.25rem]">
            기타 병력
          </div>
          <div className="flex flex-col px-4 gap-2">
            {Object.entries(data["기타 병력"]).map(([key, value]) => (
              <span key={key} className="flex gap-10">
                <span className="font-medium min-w-[120px] max-w-[120px] break-words whitespace-normal">
                  {key}
                </span>
                <span className="font-light break-words whitespace-normal">
                  {value}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </ToggleNote>
  );
};
export default CaseSummary;
