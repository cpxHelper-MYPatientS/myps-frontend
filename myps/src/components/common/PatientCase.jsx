import deleteIcon from "../../assets/common/delete.svg";
import shareIcon from "../../assets/common/share.svg";
import bookmarkIcon from "../../assets/common/bookmark.svg";
import Subject from "../MainPage/Subject";
//isCustom: 내가 만든 케이스, isChecked: 체크 on/off, isCompleted: 문진 완료
const PatientCase = ({
  patientInfo,
  isCustom = false,
  isChecked = false,
  isCompleted = false,
}) => {
  return (
    <div className="flex justify-between items-center py-4 border-b border-b-cgray-300 cursor-pointer">
      <div className="flex items-center gap-2">
        <Subject subject="문진 전" />
        <span className="w-[15.625rem]">{patientInfo}</span>
        {isCustom && (
          <div className="flex items-center gap-1">
            <button
              className="w-7 h-7"
              style={{ backgroundImage: `url(${deleteIcon})` }}
            />
            <button
              className="w-7 h-7"
              style={{ backgroundImage: `url(${shareIcon})` }}
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
    </div>
  );
};
export default PatientCase;
