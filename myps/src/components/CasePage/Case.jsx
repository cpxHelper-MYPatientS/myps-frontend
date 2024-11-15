import heartIcon from "../../assets/casePage/heart.svg";
const Case = ({ onClick }) => {
  return (
    <div
      className="flex flex-col px-7 bg-white border border-blue-50 shadow-custom2 w-[24.1875rem] h-[15.0625rem] rounded-[0.625rem] cursor-pointer"
      onClick={onClick}
    >
      <img
        className="w-[3.875rem] h-[3.625rem] ml-[16rem] mt-[1.75rem]"
        src={heartIcon}
      />
      <div className="flex flex-col mt-[1.875rem] gap-1.5 text-h2 font-medium">
        순환기
        <span className="text-p1 text-cgray-700">
          가슴 통증/실신/두근거림/고혈압/이상지질혈증
        </span>
      </div>
    </div>
  );
};
export default Case;
