import { useState, useRef, useEffect } from "react";
import SpeechBubble from "./SpeechBubble";
import ChatInput from "./ChatInput";

const Chat = () => {
  const [bubbles, setBubbles] = useState([]);
  const scrollRef = useRef();

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
        className="flex flex-col justify-end gap-1.5 w-full h-full overflow-y-auto"
      >
        {/* 스크롤이 왜 안되지?ㅠㅠ  */}
        {bubbles.map((item, index) => (
          <SpeechBubble
            key={index}
            content={item.content}
            isUser={item.isUser}
          />
        ))}
      </div>
      <ChatInput getBubbles={newBubbles} />
    </div>
  );
};

export default Chat;
