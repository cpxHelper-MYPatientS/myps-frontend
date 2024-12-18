import React from "react";
import leftIcon from "../../assets/mainPage/arrow-left.svg";
import rightIcon from "../../assets/mainPage/arrow-right.svg";
const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <div className="flex items-center justify-center mt-4 text-p2 text-cgray-400">
      <button
        className="w-[1.875rem] h-[1.875rem]"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        <img src={leftIcon} />
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <div
            key={i + 1}
            className={`text-center w-[1.875rem] cursor-pointer font-medium ${
              page === i + 1 ? "text-black" : ""
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </div>
        ))}
      <button
        className="w-[1.875rem] h-[1.875rem]"
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
      >
        <img src={rightIcon} />
      </button>
    </div>
  );
};
export default Pagination;
