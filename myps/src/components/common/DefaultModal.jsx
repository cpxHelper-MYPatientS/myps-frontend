import closeIcon from "../../assets/common/close.svg";
const DefaultModal = ({
  title,
  isTyping = false,
  onClick,
  clickText,
  onCloseClick,
}) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // 모달 내부 클릭은 배경 클릭 이벤트가 전파되지 않도록 처리
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]"
      onClick={onCloseClick} // 배경 클릭 시 모달을 닫음
    >
      <div
        className="flex flex-col px-6 pt-6 pb-12 gap-5 bg-white w-[564px] rounded-[10px]"
        onClick={handleModalClick}
      >
        <div className="flex justify-end">
          <img className="w-7 h-7" src={closeIcon} onClick={onCloseClick} />
        </div>
        <div className="text-center text-cgray-950 text-m1 font-bold">
          {title}
        </div>
        {/* type하는 공간 들어가야함  */}
        {isTyping && (
          <input
            className="px-14 py-2 bg-cgray-50 h-11 text-center text-p1 self-center rounded-[10px]"
            placeholder="아이디를 입력해주세요."
          ></input>
        )}
        <button className="px-8 py-4 bg-button text-b1 text-white self-center rounded-[0.625rem]">
          {clickText}
        </button>
      </div>
    </div>
  );
};
export default DefaultModal;
