import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/common/NavBar";
import IntroHeader from "../../components/TestPage/IntroHeader";
import TestSetting from "../../components/TestPage/TestSetting";

const TestSettingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // cleanup 함수: 컴포넌트가 언마운트될 때 실행됨
    return () => {
      // 현재 페이지에서 다른 페이지로 이동할 때의 동작 구분
      if (!window.location.pathname.includes("/test")) {
        // test 관련 페이지가 아닌 다른 페이지로 이동할 때 초기값으로 설정
        sessionStorage.setItem("examTime", "12");
        sessionStorage.setItem("isCameraOn", "false");
        sessionStorage.setItem("isMicOn", "false");
      }
    };
  }, []);

  return (
    <div className="flex flex-col pb-[7.125rem]">
      <NavBar isMain={false} />
      <div className="flex flex-col mt-[4.5rem] gap-6 mx-[22.5rem]">
        <IntroHeader title="시험 설정" />
        <TestSetting />
      </div>
    </div>
  );
};

export default TestSettingPage;
