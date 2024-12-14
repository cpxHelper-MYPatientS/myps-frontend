import { useState, useEffect } from "react";
import Spinner from "../../assets/common/loading.gif";

const messages = [
  "적절히 눈을 마주치며 대화하였다.",
  "환자의 대답에 고개를 끄덕이는 등 경청하는 자세를 보였다.",
  "몸을 약간 환자쪽으로 기울였다(의자에 몸을 파묻거나, 몸을 뒤로 누이지 않았다).",
  "예의바르되 환자를 가족처럼 친근하게 대해주었다.",
  "환자에게 대답할 시간을 충분히 준 뒤, 다음 질문을 하였다.",
  "환자의 대답을 중간에 끊는 등 방해하지 않았다.",
  "표정이나 자세를 통해 환자의 상태에 관심이 있음을 표현하였다.",
  "의사로서 자기의 역할을 알고 있는 것 같았다.",
  "자신감있고, 신뢰감있는 태도로 대화하였다.",
  "진정성있고, 솔직한 태도로 대화하였다.",
  "환자가 의견을 표현할 수 있도록 분위기를 조성하였다.",
  "기록에 열중하느라 면담을 방해하지 않았다.",
  "기계적이거나 사무적이지 않았다.",
  "연필을 돌리거나 다리를 떠는 등 진료에 필요없는 습관적 행동을 하지 않았다.",
  "가운, 손이 청결하여 위생적인 느낌을 주었다.",
  "적절한 성량, 속도와 분명한 발음으로 면담하였다.",
  "면담 시 환자와 적당한 거리를 유지하였다.",
  "신체 검진 시 불필요한 부위의 노출을 가려주었다.",
  "필요한 신체검진을 정확한 방법으로 시행하였다.",
];

const TestLoadingPage = () => {
  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [nextMessage, setNextMessage] = useState("");
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let newMessage;
      do {
        newMessage = messages[Math.floor(Math.random() * messages.length)];
      } while (newMessage === currentMessage);

      setNextMessage(newMessage);
      setCurrentMessage(newMessage);
      setKey((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentMessage]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col justify-between items-center p-[3.75rem] bg-white shadow-custom2 w-[1200px] h-[634px] rounded-bb">
        <div className="flex flex-col gap-[60px] items-center">
          <div className="flex flex-col items-center gap-3">
            <div className="text-t1 font-bold">
              이도연 선생님, 문진하느라 수고하셨습니다.
            </div>
            <div className="text-cgray-700 text-p1">
              기다리는 동안, 스스로의 진료가 어땠는지 돌이켜보세요!
            </div>
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
        <div className="px-7 py-8 bg-background text-cgray-700 text-p1 text-center w-full rounded-bb overflow-hidden relative h-[80px] flex items-center justify-center">
          <div key={key} className="animate-slide-up-translate absolute w-full">
            {currentMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestLoadingPage;
