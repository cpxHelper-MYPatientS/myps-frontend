import { useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../../assets/common/delete.svg";
import shareIcon from "../../assets/common/share.svg";
import bookmarkIcon from "../../assets/common/bookmark.svg";
import Subject from "../MainPage/Subject";
import DefaultModal from "./DefaultModal";
import useModal from "../../hooks/useModal";
//isCustom: 내가 만든 케이스, isChecked: 체크 on/off, isCompleted: 문진 완료
const PatientCase = ({
  patientInfo,
  isCustom = true,
  isChecked = false,
  isCompleted = false,
}) => {
  const navigate = useNavigate();
  const { activeModal, openModal, closeModal } = useModal(); // 커스텀 훅 사용

  const handleTestClick = () => {
    // 나중에 케이스 번호 같이 넘겨줘야함
    navigate(`/test/setting`);
  };
  return (
    <div
      className="flex justify-between items-center py-4 border-b border-b-cgray-300 cursor-pointer"
      onClick={() => openModal("case")}
    >
      <div className="flex items-center gap-2">
        <Subject subject="문진 전" />
        <span className="w-[15.625rem]">{patientInfo}</span>
        {isCustom && (
          <div className="flex items-center gap-1">
            {/* 삭제버튼  */}
            <button
              className="w-7 h-7"
              style={{ backgroundImage: `url(${deleteIcon})` }}
              onClick={(event) => {
                event.stopPropagation(); // 이벤트 버블링 방지
                openModal("delete");
              }}
            />
            {/* 공유버튼 */}
            <button
              className="w-7 h-7"
              style={{ backgroundImage: `url(${shareIcon})` }}
              onClick={(event) => {
                event.stopPropagation();
                openModal("share");
              }}
            />
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        {isChecked && (
          <button
            className="w-7 h-7"
            style={{ backgroundImage: `url(${bookmarkIcon})` }}
          />
        )}
        {isCompleted && (
          <button className="px-3 text-p2 text-cgray-700">{`피드백 >`}</button>
        )}
      </div>
      {/* 모달 통합하여 관리  */}
      {activeModal === "delete" && (
        <DefaultModal
          title={
            <>
              케이스 삭제 시 복구가 불가능합니다.
              <br />
              삭제하시겠습니까?
            </>
          }
          clickText="삭제하기"
          onCloseClick={closeModal}
        />
      )}
      {activeModal === "share" && (
        <DefaultModal
          title="친구에게 공유하기"
          isTyping={true}
          clickText="공유하기"
          onCloseClick={closeModal}
        />
      )}
      {activeModal === "case" && (
        <DefaultModal
          title={
            <>
              해당 CASE로 <br />
              문진을 시작하시겠습니까?
            </>
          }
          clickText="시작하기"
          onCloseClick={closeModal}
          onClick={handleTestClick}
        />
      )}
    </div>
  );
};

export default PatientCase;
