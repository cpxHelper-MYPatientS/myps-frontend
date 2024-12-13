import gutIcon from "../../assets/casePage/gut.svg";
const CaseTitle = () => {
  return (
    <div className="flex flex-col gap-5 text-p1 text-cgray-900">
      <div className="flex items-end gap-4 text-h1 font-bold text-b">
        <img
          className="px-[0.1875rem] py-[0.3125rem] w-[4.25rem] h-[4.25rem]"
          src={gutIcon}
        />
        소화기
      </div>
      급성복통/소화불량/만성복통/토혈/혈변/구토/변비/설사/황달
    </div>
  );
};
export default CaseTitle;
