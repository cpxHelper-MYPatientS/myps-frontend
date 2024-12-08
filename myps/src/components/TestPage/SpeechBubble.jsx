import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import handWash from "../../assets/testPage/glucose.svg";

const SpeechBubble = ({ content, isUser, isHandWashClicked }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  //사용자 말풍선이면 isUser true, GPT 말풍선이면 false
  const bubbleStyle = isUser
    ? "bg-violet-50 text-violet-600 ml-auto rounded-tl-bb rounded-tr-bb rounded-bl-bb" // 사용자 말풍선: 오른쪽 정렬
    : "bg-background text-black rounded-tl-bb rounded-tr-bb rounded-br-bb"; // GPT 말풍선: 왼쪽 정렬

  // // 시간 형식 변환 함수
  // const formatTime = (seconds) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const remainingSeconds = seconds % 60;
  //   return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
  //     .toString()
  //     .padStart(2, "0")}`;
  // };

  if (isHandWashClicked) {
    return (
      <motion.div
        initial={{ y: 10, opacity: 0 }} // 초기 상태: 화면 아래에서 위로 이동 및 투명
        animate={{ y: show ? 0 : 10, opacity: show ? 1 : 0 }} // 애니메이션 상태: 위로 이동 및 보임
        transition={{ duration: 0.4, ease: "easeOut" }} // 애니메이션 지속 시간과 easing
        //   exit={{ y: 50, opacity: 0 }} // exit 애니메이션: 다시 아래로 이동 및 투명
        className={`flex justify-center items-center p-3 gap-6 bg-background text-b2 w-full h-11 rounded-[5.0625rem]`}
      >
        <img src={handWash} className="w-5 h-5" /> 손 소독을 시행하였습니다.
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }} // 초기 상태: 화면 아래에서 위로 이동 및 투명
      animate={{ y: show ? 0 : 10, opacity: show ? 1 : 0 }} // 애니메이션 상태: 위로 이동 및 보임
      transition={{ duration: 0.4, ease: "easeOut" }} // 애니메이션 지속 시간과 easing
      //   exit={{ y: 50, opacity: 0 }} // exit 애니메이션: 다시 아래로 이동 및 투명
      className={`inline-flex justify-center items-center px-4 py-3 text-p1 max-w-[28.25rem] w-fit break-words whitespace-pre-wrap ${bubbleStyle}`}
    >
      {content}
    </motion.div>
  );
};

export default SpeechBubble;
