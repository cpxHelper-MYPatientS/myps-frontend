import { useNavigate } from "react-router-dom";
import Case from "./Case";
const CaseSelection = () => {
  const navigate = useNavigate();
  const handleHeartClick = () => {
    navigate("/case/heart");
  };
  return (
    <div className="grid grid-cols-3 gap-x-[1.1875rem] gap-y-[2.375rem]">
      <Case onClick={handleHeartClick} />
      <Case />
      <Case />
      <Case />
      <Case />
      <Case />
      <Case />
      <Case />
      <Case />
    </div>
  );
};
export default CaseSelection;
