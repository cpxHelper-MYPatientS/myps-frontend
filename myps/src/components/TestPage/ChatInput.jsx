import { useState } from "react";
import sendIcon from "../../assets/testPage/send.svg";
import recordIcon from "../../assets/testPage/record.svg";

const ChatInput = ({ getBubbles, isMicOn }) => {
  const [content, setContent] = useState("");

  const addBubble = () => {
    if (content.trim()) {
      getBubbles({ content });
      setContent("");
    }
  };

  const onEnter = (e) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      addBubble();
    }
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="flex justify-between items-center chat-input px-8 py-2 bg-chatinput text-p1 w-full h-[58px] shrink-0 rounded-[100px]">
      {isMicOn ? (
        <div className="font-medium bg-clip-text text-transparent bg-gradientRecordText">
          웹에서 녹음중...
        </div>
      ) : (
        <input
          className="bg-transparent outline-none w-full"
          type="text"
          value={content}
          onChange={changeContent}
          onKeyDown={onEnter}
          placeholder="메시지를 입력하세요"
        />
      )}
      <button
        className="flex justify-center items-center bg-white w-10 h-10 rounded-[100px]"
        onClick={addBubble}
      >
        <img src={isMicOn ? recordIcon : sendIcon} alt="send" />
      </button>
    </div>
  );
};

export default ChatInput;
