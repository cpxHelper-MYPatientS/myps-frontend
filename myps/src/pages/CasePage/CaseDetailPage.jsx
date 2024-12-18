import NavBar from "../../components/common/NavBar";
import CaseTitle from "../../components/CasePage/CaseTitle";
import CaseDetailView from "../../components/CasePage/CaseDetailView";
const CaseDetailPage = () => {
  return (
    <div className="flex flex-col pb-[119px]">
      <NavBar isMain={false} selectedMenu="CASE 연습" />
      <div className="flex flex-col gap-8 mt-[5.1875rem] mx-[22.5rem]">
        <CaseTitle />
        <CaseDetailView />
      </div>
    </div>
  );
};
export default CaseDetailPage;
