import { useState, useEffect } from "react";
import checkYes from "../../assets/testPage/check-yes.svg";
import checkNo from "../../assets/testPage/check-no.svg";

// isMultiple=true: 복수선택 가능, 처음에 아무것도 체크되어있지 않은 상태가 됨
// isMultiple=false(기본값): 복수선택 불가능(단일선택), 처음에 들어오는 옵션이 선택되어있음
// defaultCheckedIndex: 처음에 선택되어있는 옵션의 인덱스 배열
// defaultCheckedIndex가 없으면 처음에 아무것도 선택되어있지 않은 상태가 됨
// 예시: defaultCheckedIndex={[1]}
// onChange: 옵션선택에 따라 특정 작용 일어나야할때 전달

const CheckOption = ({
  options = [],
  isMultiple = false,
  onChange,
  defaultCheckedIndex,
}) => {
  const [selectedIndexes, setSelectedIndexes] = useState(
    defaultCheckedIndex || []
  );
  useEffect(() => {
    if (!isMultiple && selectedIndexes.length > 0) {
      const selectedOption = options[selectedIndexes[0]];
      // 옵션선택에 따라 특정 작용 일어나야할때 onChange 전달
      if (onChange) {
        onChange(selectedOption);
      }
    }
  }, [selectedIndexes, isMultiple, options]);
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
