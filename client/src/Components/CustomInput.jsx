const CustomInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mt-3">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 block  w-full p-2 border border-gray-500 rounded-md"
        required
      />
    </div>
  );
};

export default CustomInput;
