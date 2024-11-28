import handwash from "../../assets/testPage/handwash.svg";
import timer from "../../assets/testPage/timer.svg";
import hint from "../../assets/testPage/hint.svg";

const TestNavBar = () => {
  const activities = [
    { img: handwash, text: "손소독" },
    { img: timer, text: "타이머 보기" },
    { img: hint, text: "상황지침 확인" },
    { img: hint, text: "힌트 보기" },
  ];
  return (
    <div className="flex justify-between items-center px-9 py-3 border bg-nav border-nav shadow-custom4 backdrop-blur-[1.1719rem] w-[43.375rem] h-16 rounded-bb">
      {activities.map((activity, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-p1 text-white font-medium cursor-pointer">
            <img className="w-5 h-5" src={activity.img} />
            {activity.text}
          </div>
          {index < activities.length - 1 && (
            <div className="w-[1px] h-3.5 bg-white ml-[2.4169rem]"></div>
          )}
        </div>
      ))}
    </div>
  );
};
export default TestNavBar;
