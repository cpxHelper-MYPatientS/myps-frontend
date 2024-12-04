import exitIcon from "../../assets/testPage/exit.svg";
import NavBar from "../../components/common/NavBar";
import IntroHeader from "../../components/TestPage/IntroHeader";
import TestSetting from "../../components/TestPage/TestSetting";
import TestView from "../../components/TestPage/TestView";

// TestIntroPage에서 넘어오는것 외에는 주소를 쳐서 들어오지 못하도록 하는 작업 필요
const TestPage = () => {
  return (
    <div className="flex flex-col pb-[7.125rem]">
      <div className="flex flex-col mt-[72px] gap-2 mx-[22.5rem]">
        <div className="flex items-center p-2 gap-1 text-cgray-900 font-medium text-p1 cursor-pointer w-fit">
          <img className="w-5 h-5" src={exitIcon} />
          <div>시험 종료</div>
        </div>

        <TestView />
      </div>
    </div>
  );
};
export default TestPage;
