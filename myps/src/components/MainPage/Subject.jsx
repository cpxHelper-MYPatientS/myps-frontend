const Subject = ({ subject, onClick, isSelected = false }) => {
  return (
    <div
      onClick={onClick}
      className={`px-3 py-1 text-p1 font-semibold ${
        isSelected ? "bg-violet-500 text-white" : "bg-violet-50 text-violet-700"
      } rounded-[3.125rem] cursor-pointer`}
    >
      {subject}
    </div>
  );
};
export default Subject;
