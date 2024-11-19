import ProgressBar from "./ProgressBar";
const TestInfoView = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white shadow-custom2 w-[75rem] h-[46.5625rem] rounded-bb">
      <div className="flex flex-col gap-[4.0625rem] w-[67.5rem]">
        <div className="flex flex-col">
          <div className="flex flex-col items-center py-12 gap-6 bg-background rounded-tl-bb rounded-tr-bb  h-[30.25rem]">
            <div className="flex flex-col gap-5">
              <span className="text-h2 font-bold">
                24세 남자 김영달씨가 눈이 노랗게 되었다고 병원에 왔다.
              </span>
              <div className="flex flex-col items-center gap-3 text-b1 font-medium">
                [활력징후]
                <div className="flex flex-col justify-center items-center gap-[0.3125rem]">
                  <div className="flex gap-4">
                    혈압 :<span>120/70mmHg</span>
                  </div>
                  <div className="flex gap-4">
                    맥박 :<span>82회 / 분</span>
                  </div>
                  <div className="flex gap-4">
                    호흡 :<span>20회 / 분</span>
                  </div>
                  <div className="flex gap-4">
                    체온 :<span>36.8도</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-cgray-200 w-[813px] h-[1px]" />
            <div className="w-[606px] text-p1">
              응시자는 이 환자에게
              <br />• 증상과 관련된 병력을 청취하고,
              <br />• 증상과 관련된 적절한 신체진찰을 시행 한 후,
              <br />• 추정진단과 향후 진단계획 등에 대해 환자와 논의하시오.
            </div>
          </div>
          {/* 여기 프로그레스 바 들어갈 자리  */}
          <ProgressBar />
        </div>
        <div className="flex flex-col justify-center items-center gap-1 text-p1 text-violet-600 font-medium">
          1분 후 자동으로 시험이 시작됩니다
          <button className="px-8 py-4 text-t1 font-bold bg-violet-600 text-white w-[146px] rounded-[100px]">
            SKIP
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestInfoView;
