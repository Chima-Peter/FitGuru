interface ButtonType {
    loading: boolean;
    text: string
}

const PricingButton = ({ loading, text }: ButtonType) => {
  return (
    <button type="submit" className={`py-3 w-[100%] rounded-lg xl:text-[20px] bg-black text-white mt-3 ${loading ? 'animate-pulse': 'animate-none'}`}>
        {text}
    </button>
  )
}

export default PricingButton