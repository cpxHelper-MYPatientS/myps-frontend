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
