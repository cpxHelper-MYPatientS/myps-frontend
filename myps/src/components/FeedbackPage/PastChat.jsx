import { useState, useEffect } from "react";
import ToggleNote from "./ToggleNote";

const PastChat = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "user",
      content: "안녕하세요",
    },
    {
      sender: "gpt",
      content: "안녕하세요",
    },
    {
      sender: "user",
      content: "환자분 성함과 나이가 어떻게 되세요?",
    },
    {
      sender: "gpt",
      content: "35세 박민철입니다.",
    },
    {
      sender: "user",
      content: "어디가 아파서 오셨나요?",
    },
    {
      sender: "gpt",
      content: "배가 너무 아파서 왔어요.",
    },
  ]);

  // 대화 내역을 불러오는 함수
  const fetchChatHistory = async () => {
    try {
      // API 호출 또는 데이터 불러오기 로직
      // const response = await fetch('API_ENDPOINT');
      // const data = await response.json();
      // setChatHistory(data);
    } catch (error) {
      console.error("대화 내역을 불러오는데 실패했습니다:", error);
    }
  };

  useEffect(() => {
    fetchChatHistory();
  }, []);

  return (
    <ToggleNote title="문진 기록" description="나의 문진을 돌이켜보세요">
      <div className="px-6 py-5 bg-background border border-cgray-100 w-full h-[600px] rounded-bb overflow-y-auto">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block max-w-[275px] px-4 py-3 text-p1 rounded-t-bb break-words whitespace-normal ${
                message.sender === "user"
                  ? "bg-violet-50 text-violet-600 rounded-bl-bb"
                  : "bg-white rounded-br-bb"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
    </ToggleNote>
  );
};

export default PastChat;
