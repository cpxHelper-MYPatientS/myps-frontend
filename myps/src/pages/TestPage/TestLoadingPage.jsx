const TestLoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col justify-between items-center p-[3.75rem] bg-white shadow-custom2 w-[1200px] h-[634px] rounded-bb">
        <div className="flex flex-col gap-[60px] items-center">
          <div className="flex flex-col items-center gap-3">
            <div className="text-t1 font-bold">
              이도연 선생님, 문진하느라 수고하셨습니다.
            </div>
            <div className="text-cgray-700 text-p1">
              기다리는 동안, 스스로의 진료가 어땠는지 돌이켜보세요!
            </div>
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center w-[124px] h-[124px]">
              {/* 로딩창 들어갈자리 */} 로딩창 들어갈 자리
            </div>
            <div className="text-violet-600 text-p1 text-center">
              피드백 준비 중입니다. <br />약 1분 정도 소요되니 잠시만 기다려
              주세요.
            </div>
            <div> </div>
          </div>
        </div>
        <div className="px-7 py-8 bg-background text-cgray-700 text-p1 text-center w-full rounded-bb">
          {/* 애니메이션 및 랜덤 문구 리스트 추가해야함 */}
          환자가 의견을 표현할 수 있도록 분위기를 조성하였나요?
        </div>
      </div>
    </div>
  );
};

export default TestLoadingPage;
