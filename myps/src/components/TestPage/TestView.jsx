import patientImg from "../../assets/testPage/patient-image.png";
import userVideo from "../../assets/testPage/user-image.png";
import TestNavBar from "./TestNavBar";
import Memo from "./Memo";
import ButtonComponent from "../common/ButtonComponent";
import Chat from "./Chat";
const TestView = () => {
  return (
    <div className="flex gap-5">
      {/* 왼쪽창  */}
      <div className="flex flex-col w-[793px] shadow-custom2">
        <div
          className="flex justify-center items-end pb-[0.875rem] w-full h-[500px] rounded-tl-bb rounded-tr-bb"
          style={{ backgroundImage: `url(${patientImg})` }}
        >
          <TestNavBar />
        </div>
        {/* 채팅창 들어갈 자리 */}
        <Chat />
      </div>
      {/* 오른쪽 창 */}
      <div className="flex flex-col gap-6 w-[387px]">
        <img className="h-[251px] rounded-bb" src={userVideo} />
        <Memo />
        <ButtonComponent text="신체 검진 시작" />
      </div>
    </div>
  );
};
export default TestView;
