import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../assets/common/loading.gif";
import { getChecklist } from "../../api/chat";
const messages = [
  "면담의 시간은 10~12분으로 적절하였나요?",
  "문진 시작과 끝, 신체 진찰 전후로 손소독을 시행하였나요?",
  "면담이 10초 이상 중단되는 일 없이 논리적이고 자연스럽게 면담하였나요?",
  "한번에 여러 가지 항목을 묻지 않고, 하나씩 질문하였나요?",
  "환자의 대답에 고개를 끄덕이는 등 경청하는 자세를 보였나요?",
  "의자에 몸을 파묻거나, 몸을 뒤로 누이지 않고 몸을 약간 환자 쪽으로 기울였나요?",
  "예의 바르되 환자를 가족처럼 친근하게 대해주었나요?",
  "환자에게 대답할 시간을 충분히 준 뒤, 다음 질문을 하였나요?",
  "환자의 대답을 중간에 끊는 등 방해하지 않았나요?",
  "표정이나 자세를 통해 환자의 상태에 관심이 있음을 표현하였나요?",
  "자신감 있고, 신뢰감 있는 태도로 대화하였나요?",
  "진정성 있고, 솔직한 태도로 대화하였나요?",
  "환자가 의견을 표현할 수 있도록 분위기를 조성하였나요?",
  "기록에 열중하느라 면담을 방해하진 않았나요?",
  "기계적이거나 사무적이진 않았나요?",
  "연필을 돌리거나 다리를 떠는 등 진료에 필요 없는 습관적 행동을 하진 않았나요?",
  "가운, 손이 청결하여 위생적인 느낌을 주었나요?",
  "적절한 성량, 속도와 분명한 발음으로 면담하였나요?",
  "면담 시 환자와 적당한 거리를 유지하였나요?",
  "신체 검진 시 불필요한 부위의 노출을 가려주었나요?",
  "필요한 신체검진을 정확한 방법으로 시행하였나요?",
  "과도한 희망이나 경고를 주진 않았나요?",
];

const TestLoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { caseExamId } = location.state || {};
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [nextMessage, setNextMessage] = useState("");
  const [key, setKey] = useState(0);
  const [usedMessages, setUsedMessages] = useState([messages[0]]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newMessage;

      // 아직 모든 메시지를 사용하지 않은 경우
      if (usedMessages.length < messages.length) {
        do {
          newMessage = messages[Math.floor(Math.random() * messages.length)];
        } while (usedMessages.includes(newMessage));

        setUsedMessages((prev) => [...prev, newMessage]);
      }
      // 모든 메시지를 한 번씩 사용한 경우
      else {
        do {
          newMessage = messages[Math.floor(Math.random() * messages.length)];
        } while (newMessage === currentMessage);
      }

      setNextMessage(newMessage);
      setCurrentMessage(newMessage);
      setKey((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentMessage, usedMessages]);

  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        console.log("케이스 아이디", caseExamId);
        const checklistData = await getChecklist(caseExamId);
        sessionStorage.setItem("checklistData", JSON.stringify(checklistData));
        navigate("/feedback");
        console.log("checklist 조회", checklistData);
      } catch (error) {
        console.error("체크리스트 데이터 가져오기 실패:", error);
        // 에러 처리 로직 추가 가능
      }
    };

    fetchChecklist();
  }, [caseExamId, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col justify-between items-center p-[3.75rem] bg-white shadow-custom2 w-[1200px] h-[634px] rounded-bb">
        <div className="flex flex-col gap-[64px] items-center">
          <div className="flex items-center text-t1 font-bold">
            이도연 선생님, 문진하느라 수고하셨습니다.
          </div>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center w-[124px] h-[124px]">
              {/* 로딩창 들어갈자리 로딩창 들어갈 자리 */}
              <img src={Spinner} alt="로딩중" />
            </div>
            <div className="text-violet-600 text-p1 text-center">
              피드백 준비 중입니다. <br />약 1분 정도 소요되니 잠시만 기다려
              주세요.
            </div>
            <div> </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center px-7 py-8 gap-2 bg-background text-cgray-700 text-b2 font-medium text-center w-full rounded-bb overflow-hidden">
          <div className="text-cgray-400 text-p2">
            기다리는 동안, 스스로의 진료가 어땠는지 돌이켜보세요!
          </div>
          <div key={key} className="animate-slide-up-translate w-fit">
            {currentMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestLoadingPage;
