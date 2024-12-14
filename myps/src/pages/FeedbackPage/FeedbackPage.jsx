import { useNavigate } from "react-router-dom";
import NavBar from "../../components/common/NavBar";
import FeedbackView from "../../components/FeedbackPage/FeedbackView";
const FeedbackPage = () => {
  const navigate = useNavigate();
  const handleNextClick = () => {
    //임시로 3페이지로 바로 이동하도록 함
    navigate(`/case/3`);
  };
  return (
    <div className="flex flex-col pb-10">
      <NavBar isMain={false} />
      <div className="flex flex-col gap-10 mx-[22.5rem]">
        <div className="flex items-center justify-between mt-16 gap-2 text-h1 font-bold text-b ">
          나의 문진 돌아보기
          <button
            className="px-8 py-4 bg-button text-b1 text-white rounded-bb"
            onClick={handleNextClick}
          >
            다음 문제로 넘어가기
          </button>
        </div>
        <FeedbackView />
      </div>
    </div>
  );
};
export default FeedbackPage;
