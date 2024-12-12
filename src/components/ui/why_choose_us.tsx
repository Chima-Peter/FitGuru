interface WhyChooseUsType {
    header: string,
    text: string,
    image: string
}

const WhyChooseUs = ({ header, text, image }: WhyChooseUsType) => {
  return (
    <div className="flex gap-4 items-start xs:w-[100%] lg:w-[45%] 2xl:w-[40%]">
        <img src={image} alt={header} className="w-[30px] xl:w-[40px]" />
        <div  className="flex gap-0 flex-col items-start">
            <h3 className="text-xl font-semibold xl:text-2xl 2xl:text-3xl">
                {header}
            </h3>
            <p className="text-[15px] font-light opacity-65 xl:text-lg 2xl:text-xl">
                {text}
            </p>
        </div>
    </div>
  )
}

export default WhyChooseUs