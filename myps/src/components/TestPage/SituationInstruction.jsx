const SituationInstruction = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <span className="text-h2 font-bold">
        24세 남자 김영달씨가 눈이 노랗게 되었다고 병원에 왔다.
      </span>
      <div className="flex flex-col items-center gap-3 text-b1 font-medium">
        [활력징후]
        <div className="flex flex-col justify-center items-start gap-[0.3125rem]">
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
      <div className="bg-cgray-200 w-[813px] h-[1px]" />
      <div className="w-[37.875rem] text-p1">
        응시자는 이 환자에게
        <br />• 증상과 관련된 병력을 청취하고,
        <br />• 증상과 관련된 적절한 신체진찰을 시행 한 후,
        <br />• 추정진단과 향후 진단계획 등에 대해 환자와 논의하시오.
      </div>
    </div>
  );
};

export default SituationInstruction;
