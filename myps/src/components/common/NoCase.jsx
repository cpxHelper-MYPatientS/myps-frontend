const NoCase = ({ fontSize }) => {
  return (
    <div
      className={`flex justify-center items-center p-2.5 border border-cgray-100 bg-background ${fontSize} text-cgray-700 font-medium h-full rounded-[0.625rem]`}
    >
      직접 만든 CASE가 아직 없습니다.
      <br />
      나만의 CASE를 만들어 저장해보세요!
    </div>
  );
};
export default NoCase;
