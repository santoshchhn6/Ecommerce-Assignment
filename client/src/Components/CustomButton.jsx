const CustomButton = ({ text, color = "orange", className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-600 px-5 p-2 hover:bg-${color}-500 rounded-md cursor-pointer text-white font-medium ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
