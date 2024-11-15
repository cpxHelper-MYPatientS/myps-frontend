import Subject from "../MainPage/Subject";
const PatientCase = ({ patientInfo }) => {
  return (
    <div className="flex items-center gap-2 py-4 border-b border-b-cgray-300 cursor-pointer">
      <Subject subject="문진 전" />
      {patientInfo}
    </div>
  );
};
export default PatientCase;
