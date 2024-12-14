import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PassGraph = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-[168px] h-[168px]">
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="progressGradient">
              <stop offset="0%" stopColor="#5039FA" />
              <stop offset="100%" stopColor="#66EDCD" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative w-[168px] h-[168px]">
          <CircularProgressbarWithChildren
            value={45}
            strokeWidth={8}
            styles={{
              path: {
                stroke: "url(#progressGradient)",
                strokeWidth: "6px",
              },
              trail: {
                stroke: "#EAEAEA",
                strokeWidth: "6px",
              },
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col justify-center items-center">
                <div className="text-h2 font-bold">불합격</div>
                <div className="text-t1 font-light">45%</div>
              </div>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 text-p1">
        <span>평균 달성률 : ## %</span>
        <span>합격 기준 : 80%</span>
      </div>
    </div>
  );
};
export default PassGraph;
