interface InputTypes {
    type: string, // type of input field
    name: string, // name of input field used for collecting the state
    placeholder: string,
    value: string,
    errorMessage: string, // the error message
    error: boolean, // whether the input field has errors
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    widthDiff: boolean; // give different width based on width
}


const Input = ({ type, name, placeholder, value, errorMessage, error, onInputChange, widthDiff }: InputTypes) => {
  return (
    <label className={`relative ${widthDiff ? 'w-[100%] md:w-[48%]' : 'w-[100%] md:w-[23%]'}`}>
      <input 
        type={type} // type of input
        name={name} 
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
        autoComplete="off"
        className={`text-[16px] w-[100%] xl:text-[1px] 2xl:text-[20px] placeholder:text-sm font-normal placeholder:text-black placeholder:opacity-80 text-black  px-4 py-2 border bg-gray-100 rounded-md focus:shadow-xl focus:border-0 focus:outline-none shadow-md ${error ? 'border-2 border-red-500' : 'border-gray-200'}`}
      />
      <p className="text-xs text-red-600 font-medium py-1 px-2">
        {errorMessage}
      </p>
    </label>
  );
};



export default Input;
