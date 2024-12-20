import grad from "../../assets/mainPage/grad.svg";
import circle from "../../assets/mainPage/circle.svg";
import arrowIcon from "../../assets/mainPage/arrow_outward.svg";
const MainMenu = ({ title, iconSrc, isSub = false, onClick }) => {
  return (
    <div
      className="flex flex-col w-[24.1875rem] h-[21.75rem] px-10 pt-10 pb-9 justify-between bg-white shadow-custom2 rounded-[0.625rem] cursor-pointer"
      style={{ backgroundImage: `url(/assets/mainPage/grad.svg)` }}
      onClick={onClick}
    >
      <div
        className="flex justify-center items-center w-[60px] h-[60px]"
        style={{ backgroundImage: `url(/assets/mainPage/circle.svg)` }}
      >
        <img src={iconSrc} />
      </div>
      <div className="flex flex-col gap-2 font-medium text-cgray-900">
        {isSub ? "문진 항목" : ""}
        <div className="flex justify-between items-center text-b text-t1 font-bold ">
          {title}
          <img className="w-8 h-8" src={arrowIcon} />
        </div>
      </div>
    </div>
  );
};
export default MainMenu;
