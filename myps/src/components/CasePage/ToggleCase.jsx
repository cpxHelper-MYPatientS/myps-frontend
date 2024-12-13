import PatientCase from "../common/PatientCase";
import NoCase from "../common/NoCase";

const ToggleCase = ({ isDefault = false }) => {
  const defaultLists = [
    { patientInfo: "[급성복통] 35세 / 박민철님" },
    { patientInfo: "[실신] 50세 / 조현숙님" },
    { patientInfo: "[실신] 50세 / 조현숙님" },
    { patientInfo: "[실신] 50세 / 조현숙님" },
    { patientInfo: "[실신] 50세 / 조현숙님" },
    { patientInfo: "[실신] 50세 / 조현숙님" },
    { patientInfo: "[실신] 50세 / 조현숙님" },
    { patientInfo: "[실신] 50세 / 조현숙님" },
    { patientInfo: "[실신] 50세 / 조현숙님" },
    { patientInfo: "[실신] 50세 / 조현숙님" },
  ];
  return (
    <div className="flex flex-col justify-start gap-8 text-cgray-950 text-b2 font-medium w-[558px]">
      {isDefault ? "기본 제공 CASE" : "내가 만든 CASE"}

      {/* 원래는 defaultLists의 내용이 없으면 NoCase를 띄움 */}
      {/* <div className="flex flex-col">
        {defaultLists.map((defaultcase, index) => (
          <PatientCase key={index} patientInfo={defaultcase.patientInfo} />
        ))}
      </div> */}
      {isDefault ? (
        <div className="flex flex-col">
          {defaultLists.map((defaultcase, index) => (
            <PatientCase key={index} patientInfo={defaultcase.patientInfo} />
          ))}
        </div>
      ) : (
        <>
          <NoCase fontSize="text-b2" />
        </>
      )}
    </div>
  );
};
export default ToggleCase;
