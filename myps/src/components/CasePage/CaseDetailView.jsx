import Symptom from "./Symptom";
const CaseDetailView = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center px-5 bg-violet-600 text-p1 text-white font-bold w-[1200px] h-[54px] rounded-[10px]">
        <span className="w-[265px] text-center">주 호소명</span>
        <span className="w-[183px] ml-5 text-center">문진 항목</span>
        <span className="w-[183px] ml-5 text-center">CASE 제작하기</span>
        <span className="w-[183px] ml-5 text-center">체크리스트 달성률</span>
        <span className="w-[183px] ml-5 text-center">문진 완료 환자 수</span>
      </div>
      <div className=" relative flex flex-col gap-3">
        <Symptom />
        <Symptom />
        <Symptom />
        <Symptom />
        <Symptom />
        <Symptom />
      </div>
    </div>
  );
};
export default CaseDetailView;
