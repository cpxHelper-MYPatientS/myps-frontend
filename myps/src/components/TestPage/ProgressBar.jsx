import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/test");
          return 100;
        }
        return prev + 1; // 1%씩 증가
      });
    }, 600); // 1분 동안 100%로 도달하려면 600ms마다 1% 증가

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="bg-white overflow-hidden w-[1080px] h-[3px]">
      <div
        className="[background:linear-gradient(90deg,#5039FA_0%,#66EDCD_100%)] h-full"
        style={{
          width: `${progress}%`,
          transition: "width 0.6s linear", // 애니메이션 부드럽게
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
