import { useNavigate } from "react-router-dom";
import undoIcon from "../../assets/testPage/undo.svg";
import NavBar from "../../components/common/NavBar";
import TestSetting from "../../components/TestPage/TestSetting";
const TestSettingPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col pb-[7.125rem]">
      <NavBar isMain={false} />
      <div className="flex flex-col mt-[4.5rem] gap-6 mx-[22.5rem]">
        <div className="flex justify-between items-end text-h1 font-bold">
          시험설정
          <div
            className="flex items-center gap-1 text-p1 text-cgray-900 font-medium cursor-pointer"
            onClick={handleBackClick}
          >
            <img className="w-5 h-5" src={undoIcon} />
            뒤로 가기
          </div>
        </div>
        <TestSetting />
      </div>
    </div>
  );
};
export default TestSettingPage;
