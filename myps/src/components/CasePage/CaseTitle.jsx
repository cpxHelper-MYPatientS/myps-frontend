import heartIcon from "../../assets/casePage/heart.svg";
const CaseTitle = () => {
  return (
    <div className="flex flex-col gap-5 text-p1 text-cgray-900">
      <div className="flex items-end gap-4 text-h1 font-bold text-b">
        <img
          className="px-[0.1875rem] py-[0.3125rem] w-[4.25rem] h-[4.25rem]"
          src={heartIcon}
        />
        순환기
      </div>
      가슴 통증/실신/두근거림/고혈압/이상지질혈증
    </div>
  );
};
export default CaseTitle;
