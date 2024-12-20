import closeIcon from "../../assets/common/close.svg";
const DefaultModal = ({
  width = "w-[564px]",
  title, //내용 문구
  isTyping = false, //입력창 유무
  onClick, //버튼 클릭시 작동할 함수
  clickText, //버튼 텍스트 문구
  onCloseClick, // 닫는 함수 전달 필요 onCloseClick={closeModal}
  children,
}) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // 모달 내부 클릭은 배경 클릭 이벤트가 전파되지 않도록 처리
  };
  const handleBackgroundClick = (e) => {
    e.stopPropagation(); // 배경 클릭 이벤트가 상위로 전파되지 않도록 처리
    onCloseClick(); // 모달 닫기
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]"
      onClick={handleBackgroundClick} // 배경 클릭 시 모달을 닫음
    >
      <div
        className={`flex flex-col px-6 pt-6 pb-12 gap-5 bg-white rounded-[10px] cursor-default ${width}`}
        onClick={handleModalClick}
      >
        <div className="flex justify-end">
          <img
            className="w-7 h-7 cursor-pointer"
            src={closeIcon}
            onClick={onCloseClick}
          />
        </div>
        {title && (
          <div className="text-center text-cgray-950 text-m1 font-bold">
            {title}
          </div>
        )}
        {/* type하는 공간 들어가야함  */}
        {isTyping && (
          <input
            className="px-14 py-2 bg-cgray-50 h-11 text-center text-p1 self-center rounded-[10px]"
            placeholder="아이디를 입력해주세요."
          ></input>
        )}
        {clickText && (
          <button
            className="px-8 py-4 bg-button text-b1 text-white self-center font-bold rounded-[0.625rem]"
            onClick={onClick}
          >
            {clickText}
          </button>
        )}
        {children}
      </div>
    </div>
  );
};
export default DefaultModal;
