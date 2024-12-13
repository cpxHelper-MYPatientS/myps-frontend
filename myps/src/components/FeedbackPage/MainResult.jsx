import bookmarkOn from "../../assets/feedbackPage/bookmark-on.svg";
// import bookmarkOff from "../../assets/feedbackPage/bookmark-off.svg";
import PassGraph from "./PassGraph";
import TestGraph from "./TestGraph";
const MainResult = () => {
  return (
    <div className="flex justify-between items-center p-8 bg-white rounded-bb shadow-custom2">
      {/* 합/불 그래프 */}
      <PassGraph />
      {/* 오른쪽 뷰 */}
      <div className="flex flex-col justify-between items-end h-full">
        <img src={bookmarkOn} className="w-[29px] h-[29px] cursor-pointer" />
        <TestGraph />
      </div>
    </div>
  );
};
export default MainResult;
