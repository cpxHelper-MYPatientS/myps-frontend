import { useState, useEffect } from "react";
import checkYes from "../../assets/testPage/check-yes.svg";
import checkNo from "../../assets/testPage/check-no.svg";

// isMultiple=true: 복수선택 가능, 처음에 아무것도 체크되어있지 않은 상태가 됨
// isMultiple=false(기본값): 복수선택 불가능(단일선택), 처음에 들어오는 옵션이 선택되어있음
const CheckOption = ({ options = [], isMultiple = false }) => {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  useEffect(() => {
    // 복수 선택 불가능한 경우 첫 번째 옵션을 기본적으로 선택
    if (!isMultiple && options.length > 0) {
      setSelectedIndexes([0]);
    }
  }, [isMultiple, options]);
  const handleClick = (index) => {
    if (isMultiple) {
      // 복수 선택 가능
      setSelectedIndexes(
        (prev) =>
          prev.includes(index)
            ? prev.filter((i) => i !== index) // 이미 선택된 경우 선택 해제
            : [...prev, index] // 선택되지 않은 경우 추가
      );
    } else {
      // 단일 선택만 가능
      setSelectedIndexes([index]);
    }
  };
  return (
    <div className="flex items-center gap-8 text-p1 font-medium">
      {options.map((option, index) => (
        <div
          key={index}
          className="flex items-center gap-3 text-p1 font-medium cursor-pointer"
          onClick={() => handleClick(index)}
        >
          <img
            className="w-[1.375rem] h-[1.375rem] cursor-pointer"
            src={selectedIndexes.includes(index) ? checkYes : checkNo}
            alt={`check-${index}`}
          />
          {option}
        </div>
      ))}
    </div>
  );
};
export default CheckOption;
