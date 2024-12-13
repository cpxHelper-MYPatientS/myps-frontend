import ToggleNote from "./ToggleNote";
const SummaryNote = () => {
  return (
    <ToggleNote
      title="정리 노트"
      description="이번 문진을 통해 새로 배운 점을 정리해보세요"
    >
      <textarea
        className="px-6 py-5 bg-background border placeholder-[rgba(25,25,25,0.50)] border-cgray-100 w-full h-[600px] rounded-bb resize-none"
        placeholder="환자의 답변을 메모하며 문진해보세요."
      />
    </ToggleNote>
  );
};
export default SummaryNote;
