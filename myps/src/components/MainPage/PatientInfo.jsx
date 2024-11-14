import uploadIcon from "../../assets/mainPage/upload.svg";
import Subject from "./Subject";
const PatientInfo = (isTop = false) => {
  return (
    <div className="flex justify-between items-center px-4 w-full h-[2.8125rem] border-t border-t-cgray-200">
      <div className="flex items-center gap-3">
        <Subject subject="순환기" />
        <div className="flex items-center gap-2 text-p1 font-semibold text-cgray-950 ">
          <span>27세</span> | <span>여</span> | <span>김현주</span>
        </div>
      </div>
      <div className="flex items-center gap-1 text-cgray-700 text-p3">
        생성일
        <span className="text-p1">2024.10.27</span>
        <img
          className="ml-2 w-5 h-5 cursor-pointer"
          src={uploadIcon}
          alt="업로드하기"
        />
      </div>
    </div>
  );
};
export default PatientInfo;
