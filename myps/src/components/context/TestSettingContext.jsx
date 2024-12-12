import { createContext, useState, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
const TestSettingContext = createContext();

export const TestSettingProvider = () => {
  const [examTime, setExamTime] = useState(
    () => parseInt(sessionStorage.getItem("examTime")) || 12
  );
  const [isCameraOn, setIsCameraOn] = useState(
    () => sessionStorage.getItem("isCameraOn") === "true" || false
  );
  const [isMicOn, setIsMicOn] = useState(
    () => sessionStorage.getItem("isMicOn") === "true" || false
  );

  // useEffect(() => {
  //   // cleanup 함수: 컴포넌트가 언마운트될 때 실행됨
  //   return () => {
  //     // 현재 페이지에서 다른 페이지로 이동할 때의 동작 구분
  //     if (!window.location.pathname.includes("/test")) {
  //       // test 관련 페이지가 아닌 다른 페이지로 이동할 때 초기값으로 설정
  //       sessionStorage.setItem("examTime", "12");
  //       sessionStorage.setItem("isCameraOn", "false");
  //       sessionStorage.setItem("isMicOn", "false");
  //     }
  //   };
  // }, []);

  useEffect(() => {
    sessionStorage.setItem("examTime", examTime);
    sessionStorage.setItem("isCameraOn", isCameraOn);
    sessionStorage.setItem("isMicOn", isMicOn);
  }, [examTime, isCameraOn, isMicOn]);

  useEffect(() => {
    console.log("provider = examTime", examTime);
    console.log("provider = isMicOn", isMicOn);
    // console.log("Provider의 카메라 상태:", isCameraOn);
  }, [isCameraOn, isMicOn, examTime]);

  return (
    <TestSettingContext.Provider
      value={{
        examTime,
        setExamTime,
        isCameraOn,
        setIsCameraOn,
        isMicOn,
        setIsMicOn,
      }}
    >
      <Outlet />
    </TestSettingContext.Provider>
  );
};

export const useTestSetting = () => useContext(TestSettingContext);
