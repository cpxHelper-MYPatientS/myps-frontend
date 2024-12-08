import { useState, useRef, useEffect } from "react";
import SpeechBubble from "./SpeechBubble";
import ChatInput from "./ChatInput";

const Chat = ({ isMicOn, handWashLogs, stage }) => {
  const [bubbles, setBubbles] = useState([]);
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

  const newBubbles = (newData) => {
    // 사용자 메시지 추가
    const userMessage = {
      content: newData.content,
      isUser: true,
    };
    setBubbles((prev) => [...prev, userMessage]);

    // 여기에 나중에 GPT API 호출 로직 추가
    // 예시: GPT 응답 추가
    // const gptMessage = {
    //   content: "GPT 응답...",
    //   isUser: false,
    // };
    // setBubbles(prev => [...prev, gptMessage]);
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
