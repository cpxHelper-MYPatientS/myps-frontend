import { useState } from "react";
import NavBar from "../../components/common/NavBar";
import Subject from "../../components/MainPage/Subject";
import PhysicalView from "../../components/SubPage/PhysicalView";
const PhysicExamPage = () => {
  const subjects = [
    "전체",
    "순환기",
    "호흡기",
    "소화기",
    "신장/비뇨",
    "관절/근골격/피부",
    "전신",
    "정신/신경",
    "산부/여성/소아",
    "상담",
  ];
  const [activeSubject, setActiveSubject] = useState("전체");

  return (
    <div className="flex flex-col pb-[9.125rem]">
      <NavBar isMain={false} selectedMenu="신체검진" />
      <div className="mx-auto w-[75rem]">
        <div className="flex flex-col gap-[1.8125rem]">
          <div className="mt-[5.375rem] text-h1 font-bold">신체검진</div>
          {/* 과목선택 탭  */}
          <div className="flex gap-3 items-center w-full">
            {subjects.map((subject, index) => (
              <Subject
                key={index}
                onClick={() => setActiveSubject(subject)}
                subject={subject}
                isSelected={activeSubject === subject}
              />
            ))}
          </div>
        </div>
        <div className="mt-[2.6875rem]">
          <PhysicalView />
        </div>
      </div>
    </div>
  );
};
export default PhysicExamPage;
