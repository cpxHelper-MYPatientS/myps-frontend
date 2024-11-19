import { useNavigate } from "react-router-dom";
import undoIcon from "../../assets/testPage/undo.svg";

const IntroHeader = ({ title, imgSrc }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="flex justify-between items-end text-h1 font-bold">
      <div className="flex items-center gap-2">
        {imgSrc && <img className="w-10 h-10" src={imgSrc} />}
        {title}
      </div>
      <div
        className="flex items-center gap-1 text-p1 text-cgray-900 font-medium cursor-pointer"
        onClick={handleBackClick}
      >
        <img className="w-5 h-5" src={undoIcon} />
        뒤로 가기
      </div>
    </div>
  );
};
export default IntroHeader;
