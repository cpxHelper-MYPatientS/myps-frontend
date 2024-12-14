import glucose from "../../assets/testPage/handwash.svg";
const TestGraph = () => {
  return (
    <div className="flex flex-col gap-2.5 w-[420px]">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2 text-p2 font-medium text-violet-600">
          <div className="flex justify-center items-center bg-violet-600 w-4 h-4 rounded-full">
            <img className="w-2 h-2" src={glucose} />
          </div>
          손소독 시행 횟수 : 4회
        </div>
        <div className="text-p2 text-cgray-600">총 소요 시간 00:00</div>
      </div>
      {/* 시험 요약도 */}
      <div className="bg-gradientTestBar w-full h-[10.5px] rounded-bb" />
      <div className="flex gap-1 mt-2 justify-around">
        <div className="flex flex-col items-center gap-1 text-cgray-900 text-p1 font-medium">
          병력청취
          <div className="flex flex-col text-cgray-600 text-p2 font-normal">
            <span>소요 00:00</span>
            <span>누적 00:00</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 text-cgray-900 text-p1 font-medium">
          신체검진
          <div className="flex flex-col text-cgray-600 text-p2 font-normal">
            <span>소요 00:00</span>
            <span>누적 00:00</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 text-cgray-900 text-p1 font-medium">
          환자교육
          <div className="flex flex-col text-cgray-600 text-p2 font-normal">
            <span>소요 00:00</span>
            <span>누적 00:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestGraph;
