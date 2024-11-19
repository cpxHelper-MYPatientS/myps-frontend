import paper from "../../assets/testPage/test-paper.svg";
// import NavBar from "../../components/common/NavBar";
import IntroHeader from "../../components/TestPage/IntroHeader";
import TestInfoView from "../../components/TestPage/TestInfoView";
const TestIntroPage = () => {
  return (
    <div className="flex flex-col pb-[114px]">
      {/* <NavBar /> */}
      <div className="flex flex-col gap-6 mt-[9.375rem] mx-[22.5rem]">
        <IntroHeader title="상황 지침확인하기" imgSrc={paper} />
        <TestInfoView />
      </div>
    </div>
  );
};
export default TestIntroPage;
