const Case = ({ title, description, imgSrc, onClick }) => {
  return (
    <div
      className="flex flex-col px-6 py-8 gap-3 bg-white border border-blue-50 shadow-custom2 w-[24.1875rem] h-[15.0625rem] rounded-[0.625rem] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-end">
        <img className="w-[3.875rem] h-[3.625rem]" src={imgSrc} />
      </div>
      <div className="flex flex-col gap-1.5 text-h2 font-medium">
        {title}
        <span className="text-p1 text-cgray-700 font-normal whitespace-normal break-words overflow-wrap w-full">
          {description}
        </span>
      </div>
    </div>
  );
};
export default Case;
