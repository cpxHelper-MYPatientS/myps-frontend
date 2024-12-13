import questionIcon from "../../assets/feedbackPage/question-mark.svg";
import MainResult from "./MainResult";
import Checklist from "./Checklist";
import SummaryNote from "./SummaryNote";
import PastChat from "./PastChat";
import CaseSummary from "./CaseSummary";
const FeedbackView = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 ">
        <div className="flex items-center justify-between text-cgray-900 text-t1 ">
          과목명 / 주호소명 / ##세, #성, ####님
          <div className="text-p1 font-medium">
            {/* 셀프캠 다운로드 들어갈 자리  */}
            <div className="flex items-center px-1 py-3 gap-1 cursor-pointer">
              <img className="w-5.5 h-5.5" src={questionIcon} />
              문진 항목
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          {/* 왼쪽창 */}
          <div className="flex flex-col gap-5 w-[43.25rem]">
            {/* 메인결과 */}
            <MainResult />
            {/* 체크리스트 */}
            <Checklist />
          </div>
          {/* 오른쪽창 */}
          <div className="flex flex-col gap-5 w-[30.5rem]">
            {/* 정리노트 */}
            <SummaryNote />
            {/* 문진기록 */}
            <PastChat />
            {/* 케이스 요약 */}
            <CaseSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackView;
