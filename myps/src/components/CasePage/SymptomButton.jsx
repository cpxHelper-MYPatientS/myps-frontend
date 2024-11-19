const CheckButton = () => {
  return (
    <button className="ml-[3.875rem] px-2 py-3 bg-cgray-50 font-medium text-cgray-700 w-[6.1875rem] rounded-[0.3125rem]">
      확인하기
    </button>
  );
};

const MakeButton = () => {
  return (
    <button className="ml-[6.5625rem] px-2 py-3 bg-cgray-50 font-medium text-cgray-700 w-[6.1875rem] rounded-[0.3125rem]">
      제작하기
    </button>
  );
};

const CompleteRate = ({ onHover }) => {
  return (
    <>
      <div
        className="ml-[7.0625rem] px-2 py-3 bg-violet-25 font-bold text-violet-600 text-center w-[5.125rem] rounded-[0.3125rem] cursor-pointer"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        30%
      </div>
    </>
  );
};

const CompletePatientNum = () => {
  return (
    <div className="ml-[7rem] px-2 py-3 bg-blue-10 font-bold text-blue-600 text-center w-[6.1875rem] rounded-[0.3125rem]">
      19/20
    </div>
  );
};

export { CheckButton, MakeButton, CompleteRate, CompletePatientNum };
