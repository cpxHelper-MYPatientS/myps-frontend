import Subject from "../MainPage/Subject";
const SummaryNote = ({ subject }) => {
  return (
    <div className="flex flex-col p-4 gap-6 bg-white w-[18rem] h-[18.875rem]">
      <div className="flex gap-2.5 items-center text-violet-400">
        <Subject subject={subject} />
        <span>주호소</span>
        <span>35 여 이리이</span>
      </div>
      <div className="text-cgray-600 break-words whitespace-normal overflow-y-auto">
        오늘 아침, 어제 점심, 저녁 메뉴를 물어봤어요 저는 댓글 내용 (800자
        제한으로..)댓글 내용 (800자 제한으로..)댓글 내용 (800자 제한으로..)댓글
        내용 800자 제한으로..)댓글 내용 (800자 제한 글 내용 (800자
        제한으로..)댓글 내용 (800자 제한으로..)댓글 내용 (800자 제한으로..)댓글
        내용 (800자 제한으로..)댓글 내용 (800자 제한으로..)댓글 내용 (800자 제
        댓
      </div>
    </div>
  );
};
export default SummaryNote;
