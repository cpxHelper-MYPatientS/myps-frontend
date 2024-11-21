const CompleteRateDetail = () => {
  const lists = [
    { title: "병력청취", percent: "80" },
    { title: "신체검진", percent: "50" },
    { title: "환자교육", percent: "40" },
    { title: "PPI", percent: "50" },
  ];
  return (
    <div className="absolute flex flex-col gap-3 p-6 border border-violet-200 bg-white shadow-custom3 rounded-[0.625rem]">
      {lists.map((list, index) => (
        <div
          key={index}
          className="flex items-center gap-[2.0625rem] text-p2 font-bold"
        >
          <div className="w-[3.375rem]">{list.title}</div>
          <div className="bg-violet-50 w-[20.5rem] h-[3.125rem]">
            <div
              className="bg-gradientViolet px-5 py-4 text-white text-right h-full rounded-tr-[0.625rem] rounded-br-[0.625rem]"
              style={{ width: `${list.percent}%` }}
            >
              {list.percent}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CompleteRateDetail;
