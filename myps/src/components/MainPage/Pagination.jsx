import React from "react";
import leftIcon from "../../assets/mainPage/arrow-left.svg";
import rightIcon from "../../assets/mainPage/arrow-right.svg";
const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);
  //   console.log(numPages);

  return (
    <div className="flex items-center text-p2 text-cgray-400">
      <button
        style={{
          backgroundImage: `url(${leftIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
        className="w-[1.875rem] h-[1.875rem]"
        // onClick={() => setPage(page + 1)}
        // disabled={page === numPages}
      />
      <div className="text-center text-b w-[1.875rem] cursor-pointer">1</div>
      <div className="text-center w-[1.875rem] cursor-pointer">2</div>
      <div className="text-center w-[1.875rem] cursor-pointer">3</div>
      <div className="text-center w-[1.875rem] cursor-pointer">4</div>
      <div className="text-center w-[1.875rem] cursor-pointer">5</div>
      <button
        style={{
          backgroundImage: `url(${rightIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
        className="w-[1.875rem] h-[1.875rem]"
        // onClick={() => setPage(page + 1)}
        // disabled={page === numPages}
      />
    </div>
  );
};
export default Pagination;
