import userVideo from "../../assets/testPage/user-image.png";
import token from "../../assets/common/token.svg";
import MicSetting from "./MicSetting";
const TestSetting = () => {
  return (
    <div className="flex flex-col justify-center items-center px-11 py-4 gap-9 bg-white shadow-custom2 w-[75rem] h-[46.625rem] rounded-b">
      <div className="py-2 text-t1 font-bold h-13">
        과목명 / 주호소명 / ##세, #성, ####님
      </div>
      <div className="flex items-start gap-10">
        <div className="flex flex-col gap-[1.6875rem] w-[41.125rem]">
          <img className="h-[25.25rem] rounded-[0.625rem]" src={userVideo} />
          <MicSetting />
        </div>
        <div className="flex flex-col gap-[3.75rem] w-[25.875rem]">
          <div className="flex flex-col justify-center items-center gap-[4.75rem] bg-background border border-border h-[25.25rem] rounded-b">
            <div className="flex flex-col text-center gap-2">
              <span className="text-b2 font-bold">*시험 전 주의사항</span>
              <span className="text-p1">
                네트워크 연결을 잘 확인하십시오.
                <br />
                시험 중간에 창 종료 또는 네트워크 연결
                <br />
                실패 시 문진 내용 복원이 불가하고,
                <br />
                토큰이 차감됩니다.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span>금일 잔여 연습 횟수</span>
              <div className="flex items-center gap-2.5 font-bold text-t1">
                <img className="w-14 h-14" src={token} />
                20개
              </div>
            </div>
          </div>
          <button className="flex flex-col justify-center items-center gap-2 p-8 text-white bg-violet-600 h-[144px] rounded-[10px]">
            <div className="text-p1">준비가 완료되면 버튼을 눌러주세요!</div>
            <div className="text-h1 font-bold">시험 시작하기</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default TestSetting;
