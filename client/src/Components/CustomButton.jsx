const CustomButton = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-orange-600 px-5 p-2 hover:bg-orange-500 rounded-md cursor-pointer text-white font-medium ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
