import caseIcon from "../../assets/mainPage/case.svg";
import NavBar from "../../components/common/NavBar";
import CaseSelection from "../../components/CasePage/CaseSelection";
const CasePracticePage = () => {
  return (
    <div className="flex flex-col pb-10">
      <NavBar isMain={false} />
      <div className="flex flex-col mx-[22.5rem]">
        <div className="flex items-center mt-16 mb-[3.625rem] gap-2 text-h1 font-bold text-b ">
          <img
            className="px-[9px] pl-[10px] pr-[11px] w-12 h-12"
            src={caseIcon}
          />
          CASE 연습
        </div>
        <CaseSelection />
      </div>
    </div>
  );
};
export default CasePracticePage;
