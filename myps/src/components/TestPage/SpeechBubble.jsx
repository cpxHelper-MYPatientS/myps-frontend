import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import handWash from "../../assets/testPage/glucose.svg";
import checkYes from "../../assets/testPage/check-yes.svg";
import checkNo from "../../assets/testPage/check-no.svg";
const SpeechBubble = ({
  content,
  isUser,
  isHandWashClicked,
  isStepChanged,
  stepType,
}) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  //사용자 말풍선이면 isUser true, GPT 말풍선이면 false
  const bubbleStyle = isUser
    ? "bg-violet-50 text-violet-600 ml-auto rounded-tl-bb rounded-tr-bb rounded-bl-bb" // 사용자 말풍선: 오른쪽 정렬
    : "bg-background text-black rounded-tl-bb rounded-tr-bb rounded-br-bb"; // GPT 말풍선: 왼쪽 정렬

  //손소독 버튼 클릭시 반환되는 메세지
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

  if (isStepChanged) {
    switch (stepType) {
      case 1:
        return (
          <div className="flex flex-col justify-startitems-center gap-7 border-t-2 border-violet-300 w-[45.5625rem] h-[304px]">
            <div className="flex justify-center items-center text-st bg-gradientChat text-violet-300  font-medium w-full h-16 backdrop-blur-[0.9375rem]">
              신체 검진
            </div>
            <div className="flex justify-center items-center text-p1 text-cgray-700 text-center">
              신체 검진을 실제로 시행하고 난 뒤, <br />
              검진 항목과 결과를 확인하세요
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col justify-startitems-center gap-5 border-t-2 border-violet-300 w-[45.5625rem] h-[304px]">
            <div className="flex justify-center items-center text-st bg-gradientChat text-violet-300  font-medium w-full h-16 backdrop-blur-[0.9375rem]">
              신체 검진 결과 확인
            </div>
            <div className="flex justify-center items-center text-p1 text-cgray-700 text-center">
              미처 시행하지 못한 신체 검진은 체크해보세요
              <br />
              피드백 때 상기시켜드립니다.
            </div>
            {/* 신체검진 항목  */}
            <div className="flex justify-center items-center gap-3.5 text-p1 text-cgray-500 text-center">
              <img src={checkYes} />
              팔, 다리 시진 | <span>허벅지와 정강이에 5cm의 엷은멍(+)</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col justify-startitems-center gap-7 border-t-2 border-violet-300 w-[45.5625rem] h-[226px]">
            <div className="flex justify-center mb-5 items-center text-st bg-gradientChat text-violet-300  font-medium w-full h-16 backdrop-blur-[0.9375rem]">
              환자 교육
            </div>
          </div>
        );
      case 4:
        return <div className="">시험 종료</div>;
    }
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
