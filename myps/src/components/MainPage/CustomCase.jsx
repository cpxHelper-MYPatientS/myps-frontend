import { useState } from "react";
import caseIcon from "../../assets/mainPage/case-small.svg";
import checkYes from "../../assets/mainPage/check-color.svg";
import checkNo from "../../assets/mainPage/check-none.svg";
import Subject from "./Subject";
import PatientInfo from "./PatientInfo";
import Pagination from "./Pagination";
const CustomCase = () => {
  const tabs = ["최신 순", "오래된 순"];
  const [activeTab, setActiveTab] = useState("최신 순");
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
  //   const [posts,setPosts] = useState(tempdatas); // 나중에 백엔드 데이터 받으면 여기 저장.
  const [limit, setlimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between px-3">
        <div className="flex items-center gap-2 text-cgray-950 text-b1 font-bold">
          <img src={caseIcon} />
          내가 만든 환자 CASE
        </div>
        <div className="flex gap-3">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center py-1 gap-1 text-p1 font-bold cursor-pointer ${
                activeTab === tab ? "text-violet-600" : "text-cgray-400"
              }`}
            >
              <img src={activeTab === tab ? checkYes : checkNo} />
              {tab}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center px-10 py-5 gap-[1.9375rem] bg-white border border-cgray-100 rounded-[0.625rem]">
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
        <div className="flex flex-col w-full">
          <PatientInfo isTop={true} />
          <PatientInfo />
          <PatientInfo />
          <PatientInfo />
        </div>
        {/* <Pagination total={postMessage.length} limit={limit} page={page} setPage={setPage} /> */}
        <Pagination />
      </div>
    </div>
  );
};
export default CustomCase;
