interface ButtonType {
    loading: boolean;
}

const PricingButton = ({ loading }: ButtonType) => {
  return (
    <button type="submit" className={`py-3 w-[100%] rounded-lg xl:text-[20px] bg-black text-white mt-3 ${loading ? 'animate-pulse': 'animate-none'}`}>
        Submit
    </button>
  )
}

export default PricingButton