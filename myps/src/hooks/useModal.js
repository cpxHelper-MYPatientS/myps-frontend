//모달 상태 관리와 관련된 로직 분리
import { useState } from "react";

// useModal: 모달 상태와 관련된 로직을 캡슐화
// 사용방법:
// 모달을 사용하려는 컴포넌트 내에
// const { activeModal, openModal, closeModal } = useModal(); 추가 한후
{
  /* <div
      className="flex justify-between items-center py-4 border-b border-b-cgray-300 cursor-pointer"
      onClick={() => openModal("case")}
    ></div> */
}
// onClick함수로 전달
// 모달 렌더링
// {activeModal === "delete" && (
//     <DefaultModal
//       title={
//         <>
//           케이스 삭제 시 복구가 불가능합니다.
//         </>
//       }
//       clickText="삭제하기"
//       onCloseClick={closeModal}
//     />
//   )}

const useModal = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalKey) => setActiveModal(modalKey); // 특정 모달 열기
  const closeModal = () => setActiveModal(null); // 모달 닫기

  return {
    activeModal, // 현재 활성화된 모달 키
    openModal, // 모달 열기 함수
    closeModal, // 모달 닫기 함수
  };
};

export default useModal;
