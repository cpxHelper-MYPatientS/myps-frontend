import { useState, useEffect } from "react";
import paper from "../../assets/testPage/test-paper.svg";
import NavBar from "../../components/common/NavBar";
import IntroHeader from "../../components/TestPage/IntroHeader";
import TestInfoView from "../../components/TestPage/TestInfoView";

// 테스트 인트로 페이지이후부터는 무조건 시험 설정 페이지에서부터
// 시험 시작 버튼을 눌러야만 토큰을 차감하고 넘어올 수 있도록 해야 함.
const TestIntroPage = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    setIsNavBarVisible(true);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };
  const handleMouseLeave = () => {
    // 마우스가 영역을 떠나면 2초 뒤에 네비바를 숨기도록 설정
    const id = setTimeout(() => {
      setIsNavBarVisible(false);
    }, 2000);
    // 타이머 ID 저장
    setTimeoutId(id);
  };

  return (
    <div className="flex flex-col pb-[114px] relative">
      {/* 네비바 인식할 영역  */}
      <div
        className="absolute top-0 left-0 w-full h-[30px] z-20"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className={`fixed top-0 z-10 transition-transform ${
          isNavBarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <NavBar isMain={false} selectedMenu="CASE 연습" />
      </div>
      <div className="flex flex-col gap-6 mt-[9.375rem] mx-[22.5rem]">
        <IntroHeader title="상황 지침 확인하기" imgSrc={paper} />
        <TestInfoView />
      </div>
    </div>
  );
};
export default TestIntroPage;
