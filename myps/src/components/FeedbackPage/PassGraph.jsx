import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PassGraph = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <CircularProgressbarWithChildren
        value={45}
        strokeWidth={8}
        className="w-[168px] h-[168px]"
        styles={{
          path: {
            stroke: `linear-gradient(90deg, #5039FA -33.33%, #66EDCD 63.81%)`, // 프로그레스바 색상
            strokeWidth: "6px",
          },
          trail: {
            stroke: "#EAEAEA", // 배경 트랙 색상
            strokeWidth: "6px",
          },
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="text-h2 font-bold">불합격</div>
          <div className="text-t1 font-light">45%</div>
        </div>
      </CircularProgressbarWithChildren>
      <div className="flex flex-col items-center gap-1 text-p1">
        <span>평균 달성률 : ## %</span>
        <span>합격 기준 : 80%</span>
      </div>
    </div>
  );
};
export default PassGraph;
