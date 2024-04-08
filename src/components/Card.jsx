import EllipsisIcon from "./Svgs";

const Card = ({ data, index, frequency }) => {
  const backgroundsColors = {
    0: "bg-light-red-work",
    1: "bg-soft-blue-play",
    2: "bg-light-red-study",
    3: "bg-lime-green-exercise",
    4: "bg-violet-social",
    5: "bg-soft-orange",
  };

  const frequencyData = {
    0: data.timeframes.daily,
    1: data.timeframes.weekly,
    2: data.timeframes.monthly,
  };

  return (
    <article
      className={`text-white 
${backgroundsColors[index]} md2:h-56 md2:pt-0 relative h-32 w-full  overflow-hidden rounded-xl pt-8 transition-all`}
    >
      <img
        src={
          index === 5
            ? "../../images/icon-self-care.svg"
            : `../../images/icon-${data.title}.svg`.toLowerCase``
        }
        alt=""
        className="md2:h-16 md2:w-16 absolute -top-1 right-3 h-12 w-12 transition-all"
      />
      <div className="md2:relative  md2:-bottom-[2.5rem] md2:grid md2:grid-cols-2 absolute -bottom-[1.6rem] flex h-full w-full cursor-pointer justify-between rounded-t-xl bg-dark-blue p-5 transition-all duration-300 hover:bg-[#333982]">
        <div className="md2:gap-8 flex  flex-col">
          <h4
            className={`md2:text-lg transition-all ${data.title.length > 6 ? "md2:text-[.8rem] lg:text-lg" : "md2:text-lg"}`}
          >
            {data.title}
          </h4>
          <span className=" md2:text-5xl text-2xl font-extralight">
            {frequencyData[frequency].current}hrs
          </span>
        </div>
        <div className=" md2:static absolute right-4 mt-2 flex flex-col items-end gap-2">
          <button className="group z-50">
            <EllipsisIcon />
          </button>
          <span
            className=" md2:absolute md2:bottom-16 md2:left-[1.3rem] md2:text-sm 
          text-[13px] text-pale-blue transition-all "
          >
            Last Week - {frequencyData[frequency].previous}hrs
          </span>
        </div>
      </div>
    </article>
  );
};
export default Card;
