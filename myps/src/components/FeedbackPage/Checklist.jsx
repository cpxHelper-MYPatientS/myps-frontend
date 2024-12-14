import { useState } from "react";
import checkYes from "../../assets/feedbackPage/check-yes.svg";
import checkNo from "../../assets/feedbackPage/check-no.svg";
import feebackJson from "../../../public/assets/patientData/subject3/cc10/feedbackList.json";
const Checklist = () => {
  const [activeTab, setActiveTab] = useState("전체");
  const data = feebackJson;
  console.log(data);
  const tabs = ["전체", "병력청취", "신체검진", "환자교육", "PPI"];

  //   status는 시행함/안함 여부 : true면 시행함, false면 시행안함
  const tableData = {
    // 병력청취: [
    //   { item: "복통 발생 시기를 확인하였는가?", status: "" },
    //   { item: "복통 발생 시기를 확인하였는가?", status: "" },
    //   { item: "복통 발생 시기를 확인하였는가?", status: "" },
    //   { item: "복통 발생 시기를 확인하였는가?", status: "" },
    // ],
    병력청취: Object.entries(data.병력청취).map(([item, status]) => ({
      item,
      status,
    })),
    신체검진: [{ item: "생체 징후를 확인하였는가?", status: "" }],
    환자교육: Object.entries(data.환자교육).map(([item, status]) => ({
      item,
      status,
    })),
    PPI: Object.entries(data.PPI).map(([item, status]) => ({
      item,
      status,
    })),
  };

  return (
    <div className="flex flex-col gap-4 px-6 py-7 text-b1 font-bold bg-white rounded-bb shadow-custom2">
      <div className="text-xl mb-4">체크리스트</div>

      {/* 탭 버튼들 */}
      <div className="flex gap-2 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-2 py-1 text-b2 mr-11 ${
              activeTab === tab
                ? "border-b-2 border-violet-500 text-violet-600"
                : "text-cgray-500 font-normal"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 테이블 */}
      <div className="">
        <table className="w-full">
          <thead>
            <tr className=" h-9">
              <th className="border bg-violet-100 text-p1 px-3 text-left border-rounded-t-aa rounded-t-aa">
                {activeTab === "전체" ? "병력청취" : activeTab}
              </th>
              <th className="border px-4 bg-cgray-100 text-p1 text-center font-medium w-[90px] rounded-t-aa">
                시행 함
              </th>
              <th className="border px-4 bg-cgray-100 text-p1 text-center font-medium w-[90px] rounded-t-aa">
                시행 안 함
              </th>
            </tr>
          </thead>
          <tbody>
            {activeTab === "전체"
              ? Object.entries(tableData).map(([category, items]) => (
                  <>
                    {category !== "병력청취" && (
                      <tr className="h-9" key={`category-${category}`}>
                        <td
                          colSpan="3"
                          className="border bg-violet-100 text-p1 px-3 font-bold h-9"
                        >
                          {category}
                        </td>
                      </tr>
                    )}
                    {items.map((row, index) => (
                      <tr className="h-9" key={`${category}-${index}`}>
                        <td className="border text-p3 font-normal px-3 break-words whitespace-normal ">
                          {row.item}
                        </td>
                        <td className="border px-3  text-center">
                          <img
                            src={row.status ? checkYes : checkNo}
                            className="mx-auto"
                          />
                        </td>
                        <td className="border px-3  text-center">
                          <img
                            src={row.status ? checkNo : checkYes}
                            className="mx-auto"
                          />
                        </td>
                      </tr>
                    ))}
                  </>
                ))
              : tableData[activeTab].map((row, index) => (
                  <tr className="h-9" key={index}>
                    <td className="border text-p3 font-normal px-3 break-words whitespace-normal ">
                      {row.item}
                    </td>
                    <td className="border px-3 text-center">
                      <img
                        src={row.status ? checkYes : checkNo}
                        className="mx-auto"
                      />
                    </td>
                    <td className="border px-3 text-center">
                      <img
                        src={row.status ? checkNo : checkYes}
                        className="mx-auto"
                      />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checklist;
