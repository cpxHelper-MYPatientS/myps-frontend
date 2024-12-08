import React from "react";
import Webcam from "react-webcam";
import NavBar from "../../components/common/NavBar";
import IntroHeader from "../../components/TestPage/IntroHeader";
import TestSetting from "../../components/TestPage/TestSetting";
const TestSettingPage = () => {
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
