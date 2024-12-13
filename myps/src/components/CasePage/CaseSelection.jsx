import heartIcon from "../../assets/casePage/heart.svg";
import lungIcon from "../../assets/casePage/lung.svg";
import gutIcon from "../../assets/casePage/gut.svg";
import kidneyIcon from "../../assets/casePage/kidney.svg";
import bodyIcon from "../../assets/casePage/body.svg";
import jointIcon from "../../assets/casePage/joint.svg";
import mentalIcon from "../../assets/casePage/mental.svg";
import womenIcon from "../../assets/casePage/women.svg";
import counselIcon from "../../assets/casePage/counsel.svg";

import { useNavigate } from "react-router-dom";
import Case from "./Case";
const CaseSelection = () => {
  const navigate = useNavigate();
  const handleCaseClick = (index) => {
    navigate(`/case/${index + 1}`);
  };
  const cases = [
    {
      title: "순환기",
      description: "가슴 통증/실신/두근거림/고혈압/이상지질혈증",
      imgSrc: heartIcon,
    },
    {
      title: "호흡기",
      description: "기침/콧물코막힘/객혈/호흡곤란",
      imgSrc: lungIcon,
    },
    {
      title: "소화기",
      description: "급성복통/소화불량/만성복통/토혈/혈변/구토/변비/설사/황달",
      imgSrc: gutIcon,
    },
    {
      title: "신장/비뇨",
      description: "다뇨/핍뇨/붉은색 소변/배뇨 이상/소변찔끔증",
      imgSrc: kidneyIcon,
    },
    {
      title: "전신",
      description: "발열/쉽게 멍이 듦/피로/체중 감소/체중 증가",
      imgSrc: bodyIcon,
    },
    {
      title: "관절/근골격/피부",
      description: "관절통증,부기/목 통증/허리 통증/피부 발진",
      imgSrc: jointIcon,
    },
    {
      title: "정신/신경",
      description:
        "기분 변화/불안/수면장애/기억력저하/어지럼/두통/경련/근력,감각 이상/의식장애/떨림, 운동이상",
      imgSrc: mentalIcon,
    },
    {
      title: "산부/여성/소아",
      description:
        "유방통/유방덩이/질분비물/질출혈/월경 이상/월경통/산전 진찰/성장, 발달지연/예방접종",
      imgSrc: womenIcon,
    },
    {
      title: "상담",
      description:
        "음주/금연/물질 오남용/나쁜 소식 전하기/가정 폭력/성 폭력/자살",
      imgSrc: counselIcon,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-x-[1.1875rem] gap-y-[2.375rem]">
      {cases.map((caseItem, index) => (
        <Case
          key={index}
          onClick={() => handleCaseClick(index)}
          title={caseItem.title}
          description={caseItem.description}
          imgSrc={caseItem.imgSrc}
        />
      ))}
    </div>
  );
};
export default CaseSelection;
