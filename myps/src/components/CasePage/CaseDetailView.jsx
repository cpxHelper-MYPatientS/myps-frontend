import Symptom from "./Symptom";
const CaseDetailView = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center px-5 bg-violet-600 text-p1 text-white font-bold w-[1200px] h-[54px] rounded-[10px]">
        <span className="w-[16.5625rem] text-center">주 호소명</span>
        <span className="w-[11.4375rem] ml-5 text-center">문진 항목</span>
        <span className="w-[11.4375rem] ml-5 text-center">CASE 제작하기</span>
        <span className="w-[11.4375rem] ml-5 text-center">
          체크리스트 달성률
        </span>
        <span className="w-[11.4375rem] ml-5 text-center">
          문진 완료 환자 수
        </span>
      </div>
      <div className=" relative flex flex-col gap-3 z-10">
        {/* z인덱스를 내림차순으로 넣어줘야 함 */}
        <div key={1} className="relative z-50">
          <Symptom />
        </div>
        <div key={2} className="relative z-40">
          <Symptom />
        </div>
        <div key={3} className="relative z-30">
          <Symptom />
        </div>
        <div key={4} className="relative z-20">
          <Symptom />
        </div>
      </div>
    </div>
  );
};
export default CaseDetailView;
