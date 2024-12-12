const Memo = () => {
  return (
    <div className="flex flex-col p-6 gap-6 bg-white shadow-custom2 h-[445px] rounded-bb">
      <div className="text-b1 font-bold">메모장</div>
      <textarea
        className="px-6 py-5 bg-background border placeholder-[rgba(25,25,25,0.50)] border-cgray-100 h-full rounded-bb resize-none"
        placeholder="환자의 답변을 메모하며 문진해보세요."
      ></textarea>
    </div>
  );
};
export default Memo;
