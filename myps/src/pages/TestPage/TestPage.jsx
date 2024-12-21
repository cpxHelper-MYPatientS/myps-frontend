import { useNavigate } from "react-router-dom";
import exitIcon from "../../assets/testPage/exit.svg";
import NavBar from "../../components/common/NavBar";
import TestView from "../../components/TestPage/TestView";
import useModal from "../../hooks/useModal";
import DefaultModal from "../../components/common/DefaultModal";
import { useState } from "react";

// TestIntroPage에서 넘어오는것 외에는 주소를 쳐서 들어오지 못하도록 하는 작업 필요
const TestPage = () => {
  const navigate = useNavigate();
  const { activeModal, openModal, closeModal } = useModal();
  const [handleExamComplete, setHandleExamComplete] = useState(null);

  return (
    <div className="flex flex-col pb-[7.125rem]">
      <div className="flex flex-col mt-[72px] gap-2 mx-[22.5rem]">
        <div
          className="flex items-center p-2 gap-1 text-cgray-900 font-medium text-p1 cursor-pointer w-fit"
          onClick={() => {
            openModal("step4");
          }}
        >
          <img className="w-5 h-5" src={exitIcon} />
          <div>시험 종료</div>
        </div>
        <TestView setHandleExamComplete={setHandleExamComplete} />
      </div>
      {activeModal === "step4" && (
        <DefaultModal
          title={
            <>
              시험을 종료하시겠습니까?
              <br />
              피드백 화면으로 이동합니다.
            </>
          }
          clickText="종료"
          onCloseClick={closeModal}
          onClick={handleExamComplete}
        />
      )}
    </div>
  );
};
export default TestPage;
