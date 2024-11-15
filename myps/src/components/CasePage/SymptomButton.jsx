const CheckButton = () => {
  return (
    <button className="ml-[3.875rem] px-2 py-3 bg-cgray-50 font-medium text-cgray-700 w-[99px] rounded-[5px]">
      확인하기
    </button>
  );
};

const MakeButton = () => {
  return (
    <button className="ml-[105px] px-2 py-3 bg-cgray-50 font-medium text-cgray-700 w-[99px] rounded-[5px]">
      제작하기
    </button>
  );
};

const CompleteRate = () => {
  return (
    <div className="ml-[113px] px-2 py-3 bg-violet-25 font-bold text-violet-600 text-center w-[82px] rounded-[5px] cursor-pointer">
      30%
    </div>
  );
};

const CompletePatientNum = () => {
  return (
    <div className="ml-[112px] px-2 py-3 bg-blue-10 font-bold text-blue-600 text-center w-[99px] rounded-[5px]">
      19/20
    </div>
  );
};

export { CheckButton, MakeButton, CompleteRate, CompletePatientNum };
