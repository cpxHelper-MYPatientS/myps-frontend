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
  const [checkedItems, setCheckedItems] = useState([]);

  const checkItems = [
    "팔, 다리 시진 |  허벅지와 정강이에 5cm의 엷은멍(+)",
    "눈 |  결막: 빈혈 (-), 공막: 황달 (-)",
    "복부 진찰  |  시진 : 덩이 (-), 복수 (-), 외상 (-) / 청진 : 정상 장음 / 타진 : 정상 / 촉진 : 오른쪽 윗배 압통/반발압통(+/+)",
    "충수돌기염 검사 | obturator sign (-)",
    "murphy sign 검사 |	murphy sign (+)",
    "cvat 검사	늑골 척주각 압통 (+) ",
    // 필요한 만큼 항목 추가
  ];

  useEffect(() => {
    setShow(true);
  }, []);

  const handleCheck = (item) => {
    setCheckedItems((prev) => {
      if (prev.includes(item)) {
        return prev.filter((checkedItem) => checkedItem !== item);
      } else {
        return [...prev, item];
      }
    });
  };

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
          <div className="flex flex-col justify-start items-center mb-[166px] gap-7 border-t-2 border-violet-300 w-[45.5625rem]">
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
          <div className="flex flex-col justify-start items-center gap-5 w-[45.5625rem]">
            <div className="flex flex-col justify-start mt-3 items-center gap-5 w-full">
              <div className="flex justify-center items-center text-st bg-gradientChat border-t-2 border-violet-300 text-violet-300 font-medium w-full h-[64px] flex-shrink-0 backdrop-blur-[0.9375rem]">
                신체 검진 결과 확인
              </div>
              <div className="flex justify-center items-center text-p1 text-cgray-700 text-center">
                미처 시행하지 못한 신체 검진은 체크해보세요
                <br />
                피드백 때 상기시켜드립니다.
              </div>
              {/* 신체검진 항목  */}
              <div className="flex flex-col gap-3">
                {checkItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleCheck(item)}
                    className="flex justify-center items-start gap-3.5 text-p1 text-cgray-500 text-center break-words whitespace-normal max-w-[600px] cursor-pointer"
                  >
                    <img
                      src={checkedItems.includes(item) ? checkYes : checkNo}
                      alt="체크 표시"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col justify-start items-center mt-2 mb-[142px] gap-7 border-t-2 border-violet-300 w-[45.5625rem] ">
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
