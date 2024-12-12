import { useState, useRef, useEffect } from "react";
import SpeechBubble from "./SpeechBubble";
import ChatInput from "./ChatInput";
import { startChat } from "../../api/chat";

const Chat = ({ isMicOn, handWashLogs, stage }) => {
  const [bubbles, setBubbles] = useState([]);
  const [currentCaseExamId, setCurrentCaseExamId] = useState(null);
  const scrollRef = useRef();

  useEffect(() => {
    if (handWashLogs.length > 0) {
      // 가장 최근 로그에 대한 버블 추가
      const handWashBubble = {
        isHandWashClicked: true,
      };
      setBubbles((prev) => [...prev, handWashBubble]);
    }
  }, [handWashLogs]);

  useEffect(() => {
    if (stage) {
      console.log("stage 변화", stage);
      let stepBubble = {
        isStepChanged: true,
      };

      switch (stage) {
        case 1: //신체검진 시작
          stepBubble = {
            ...stepBubble,
            stepType: 1,
            // step1에 필요한 추가 속성
          };
          setBubbles((prev) => [...prev, stepBubble]);
          break;
        case 2:
          stepBubble = {
            ...stepBubble,
            stepType: 2,
            // step2에 필요한 추가 속성
          };
          setBubbles((prev) => [stepBubble]);
          break;
        case 3:
          stepBubble = {
            ...stepBubble,
            stepType: 3,
          };
          setBubbles((prev) => [stepBubble]);
          break;
        // case 4:
        //   stepBubble = {
        //     ...stepBubble,
        //     stepType: 4,
        //   };
        //   setBubbles((prev) => [...prev, stepBubble]);
        // break;
        default:
          break;
      }
    }
  }, [stage]);

  //스크롤 자동 올림
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [bubbles]);

  const handleChatResponse = (response) => {
    // caseExamId 저장
    if (response?.caseExamId) {
      setCurrentCaseExamId(response?.caseExamId);
    }

    // 메시지 처리 - 마지막 메시지만 표시
    if (response?.messages && response.messages.length > 0) {
      const lastMessage = response.messages[response.messages.length - 1];
      const newMessage = {
        content: lastMessage.content,
        isUser: lastMessage.sender === "USER",
      };

      setBubbles((prev) => [...prev, newMessage]);
    }
  };

  const newBubbles = async (newData) => {
    // 사용자 메시지 추가
    const userMessage = {
      content: newData.content,
      isUser: true,
    };
    setBubbles((prev) => [...prev, userMessage]);

    try {
      // API 요청 데이터 준비
      const chatData = {
        memberId: 1, // 하드코딩
        patientId: 1, // 하드코딩
        caseExamId: currentCaseExamId, // 첫 요청시 null, 이후 서버에서 받은 값 사용
        // caseExamId: 11,
        message: newData.content,
      };
      console.log("전송한 채팅 데이터: ", chatData);
      // API 호출
      const response = await startChat(
        chatData?.memberId,
        chatData?.caseExamId,
        chatData?.patientId,
        chatData?.message
      );
      console.log("채팅 응답: ", response);

      // 응답 처리
      handleChatResponse(response);
    } catch (error) {
      console.error("채팅 실패:", error);
      // 에러 처리 UI 추가 가능
    }
  };

  return (
    <div className="flex flex-col bg-white px-8 pb-6 gap-6 justify-end w-full h-[352px] rounded-bl-bb rounded-br-bb">
      <div
        ref={scrollRef}
        className="flex flex-col gap-1.5 w-full h-full overflow-y-auto scrollbar-hide"
      >
        <div className="flex-grow"></div>
        {bubbles.map((item, index) => (
          <SpeechBubble
            key={index}
            content={item.content}
            isUser={item.isUser}
            isHandWashClicked={item.isHandWashClicked}
            isStepChanged={item.isStepChanged}
            stepType={item.stepType}
          />
        ))}
      </div>
      {stage !== 1 && stage !== 2 && (
        <ChatInput getBubbles={newBubbles} isMicOn={isMicOn} />
      )}
    </div>
  );
};

export default Chat;
