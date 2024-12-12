const ButtonComponent = ({ text, onClick }) => {
  return (
    <button
      className="flex justify-center items-center p-8 bg-violet-600 text-h1 text-white font-semibold rounded-bb"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default ButtonComponent;
