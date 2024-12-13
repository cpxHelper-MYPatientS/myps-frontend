import ToggleNote from "./ToggleNote";
const CaseSummary = () => {
  const relatedDiseases = [
    { title: "복통 시작 시기", content: "2일 전" },
    { title: "복통 지속", content: "처음에는 명치, 이후 오른쪽 윗배" },
    { title: "복통 지속 시간", content: "현재는 4시간 내내 지속" },
    {
      title: "복통 경과",
      content: " 처음에는 간헐적, 현재는 지속적이며 심한 통증",
    },
    { title: "복통 이전 경험", content: "기름진 음식 섭취 시 통증 경험" },
    { title: "복통 양상", content: "쥐어 짜는 듯한 느낌" },
    { title: "복통 강도 (NRS)", content: "최고점 7점" },
    { title: "악화요인", content: "기름진 음식 섭취, 앞으로 숙이는 자세" },
    { title: "완화요인", content: "공복" },
    {
      title: "동반 증상",
      content: "몸이 으슬으슬 떨림, 메스꺼움, 복부 팽만감",
    },
  ];
  return (
    <ToggleNote
      title="CASE 요약"
      description="문진하지 않은 정보가 있는지 확인해보세요"
    >
      <div className="flex flex-col gap-3 bg-background">
        {/* 감별진단 후보 */}
        <div className="flex flex-col gap-2 text-p2 ">
          <div className="px-2 py-1  bg-violet-50 rounded-[0.25rem]">
            감별진단 후보
          </div>
          <div className="flex flex-col px-4 gap-2 font-bold ">
            <span>1.</span>
            <span>2.</span>
            <span>3.</span>
          </div>
        </div>
        {/* 검사계획 후보 */}
        <div className="flex flex-col gap-2 text-p2 ">
          <div className="px-2 py-1  bg-violet-50 rounded-[0.25rem]">
            검사계획 후보
          </div>
          <div className="flex flex-col px-4 gap-2 font-bold ">
            <span>1.</span>
            <span>2.</span>
            <span>3.</span>
          </div>
        </div>
        {/* 검사계획 후보 */}
        <div className="flex flex-col gap-2 text-p2 ">
          <div className="px-2 py-1  bg-violet-50 rounded-[0.25rem]">
            치료계획 후보
          </div>
          <div className="flex flex-col px-4 gap-2 font-bold ">
            <span>1.</span>
            <span>2.</span>
            <span>3.</span>
          </div>
        </div>
        {/* 기본 환자 정보 */}
        <div className="flex flex-col gap-2 text-p2 ">
          <div className="px-2 py-1  bg-violet-50 rounded-[0.25rem]">
            기본 환자 정보
          </div>
          <div className="flex flex-col px-4 gap-2 font-bold ">
            <span className="flex justify-between">
              • 이름/성별
              <span className="font-light w-[180px]">박민철/남성</span>
            </span>
            <span className="flex justify-between">
              • 생년월일
              <span className="font-light w-[180px]">1990년 05월 13일</span>
            </span>
            <span className="flex justify-between">
              • 방문 이유
              <span className="font-light w-[180px]">배가 너무 아파서</span>
            </span>
          </div>
        </div>
        {/* 주호소 관련 병력 */}
        <div className="flex flex-col gap-2 text-p2 ">
          <div className="px-2 py-1  bg-violet-50 rounded-[0.25rem]">
            주호소 관련 병력
          </div>
          <div className="flex flex-col px-4 gap-2 font-bold">
            {relatedDiseases.map((item, index) => (
              <span key={index} className="flex justify-between">
                • {item.title}
                <span className="font-light break-words whitespace-normal  w-[180px]">
                  {item.content}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </ToggleNote>
  );
};
export default CaseSummary;
