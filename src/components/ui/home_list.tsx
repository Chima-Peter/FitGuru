interface HomeListType {
    header: string,
    firstParagraph: string,
    secondParagraph: string
}

const HomeList = ({ header, firstParagraph, secondParagraph }: HomeListType) => {
  return (
    <div className="flex flex-col justify-between items-start text-white xs:w-[100%] sm:w-[48%] lg:w-fit h-fit">
        <h2 className="text-3xl font-bold pb-1 tracking-wide xl:text-4xl 2xl:text-5xl">
            {header}
        </h2>
        <p className="text-sm font-normal tracking-wide xl:text-lg 2xl:text-xl">
            {firstParagraph}
        </p>
        <p className="text-sm font-light tracking-wide xl:text-lg 2xl:text-xl">
            {secondParagraph}
        </p>
    </div>
  )
}

export default HomeList