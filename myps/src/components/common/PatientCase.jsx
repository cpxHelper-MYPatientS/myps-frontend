import { useState } from "react";
import deleteIcon from "../../assets/common/delete.svg";
import shareIcon from "../../assets/common/share.svg";
import bookmarkIcon from "../../assets/common/bookmark.svg";
import Subject from "../MainPage/Subject";
import DefaultModal from "./DefaultModal";
//isCustom: 내가 만든 케이스, isChecked: 체크 on/off, isCompleted: 문진 완료
const PatientCase = ({
  patientInfo,
  isCustom = true,
  isChecked = false,
  isCompleted = false,
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteModalOpen((prev) => !prev); // 이전 상태를 기반으로 토글
  };
  const handleShareClick = () => {
    setIsShareModalOpen((prev) => !prev); // 이전 상태를 기반으로 토글
  };
  return (
    <div className="flex justify-between items-center py-4 border-b border-b-cgray-300 cursor-pointer">
      <div className="flex items-center gap-2">
        <Subject subject="문진 전" />
        <span className="w-[15.625rem]">{patientInfo}</span>
        {isCustom && (
          <div className="flex items-center gap-1">
            {/* 삭제버튼  */}
            <button
              className="w-7 h-7"
              style={{ backgroundImage: `url(${deleteIcon})` }}
              onClick={handleDeleteClick}
            />
            {isDeleteModalOpen && (
              <DefaultModal
                title={
                  <>
                    케이스 삭제 시 복구가 불가능합니다.
                    <br />
                    삭제하시겠습니까?
                  </>
                }
                clickText="삭제하기"
                onCloseClick={handleDeleteClick}
              />
            )}
            {/* 공유버튼 */}
            <button
              className="w-7 h-7"
              style={{ backgroundImage: `url(${shareIcon})` }}
              onClick={handleShareClick}
            />
            {isShareModalOpen && (
              <DefaultModal
                title="친구에게 공유하기"
                isTyping={true}
                clickText="공유하기"
                onCloseClick={handleShareClick}
              />
            )}
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
    </div>
  );
};
export default PatientCase;
