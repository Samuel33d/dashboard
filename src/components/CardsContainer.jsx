import { useState } from "react";
import Card from "./Card";

const CardsContainer = ({ data }) => {
  const [frequency, setFrequency] = useState(0);

  const frequencys = ["Daily", "Weekly", "Monthly"];
  return (
    <section className="md2:grid md2:grid-cols-[25%,75%] flex w-full max-w-[1200px] flex-col gap-3 rounded-md  transition-all">
      <article className="flex flex-col rounded-xl bg-dark-blue transition-all">
        <div className="md2:grid-cols-1 md2:gap-10 md2:px-7 md2:pb-[4.8rem] md2:pt-7 grid grid-cols-[auto,1fr] items-center gap-3 rounded-xl bg-Blue p-5 transition-all">
          <header className="">
            <img
              src="/images/image-jeremy.png"
              alt=""
              className="md2:h-[4rem] md2:w-[4rem] h-[3.2rem] w-[3.2rem] rounded-full border-[3px] transition-all"
            />
          </header>
          <div className="text-white flex flex-col items-start justify-start font-extralight tracking-wide">
            <span className="md2:text-sm text-[13.5px] transition-all">
              Report for
            </span>
            <h3 className="md2:w-[30%] md2:text-4xl text-lg transition-all">
              Jeremy Robson
            </h3>
          </div>
        </div>
        <div className="md2:h-full md2:flex-col md2:items-start md2:justify-evenly md2:gap-0 flex justify-around gap-5 px-8 text-sm tracking-wide text-desaturated-blue transition-all">
          {frequencys.map((f, index) => (
            <button
              key={f}
              onClick={() => setFrequency(index)}
              className="hover:text-white md2:py-0 py-4 transition-all"
            >
              {f}
            </button>
          ))}
        </div>
      </article>
      <ul className="md2:grid-cols-3 grid w-full gap-5 transition-all">
        {data.map((info, index) => (
          <li key={info.title}>
            <Card frequency={frequency} data={info} index={index} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CardsContainer;
