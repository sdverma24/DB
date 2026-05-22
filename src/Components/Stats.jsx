import CountUp from "react-countup";
import {
  FaUsers,
  FaEye,
  FaVideo,
  FaCalendar
} from "react-icons/fa";

const stats = [

  {
    icon:<FaUsers />,
    value:100,
    suffix:"K+",
    label:"Subscribers"
  },

  {
    icon:<FaEye />,
    value:5,
    suffix:"M+",
    label:"Views"
  },

  {
    icon:<FaVideo />,
    value:200,
    suffix:"+",
    label:"Videos"
  },

  {
    icon:<FaCalendar />,
    value:2,
    suffix:"+",
    label:"Years"
  }
];

export default function Stats() {

  return (
    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <h2
          className="
          text-center
          text-5xl
          font-black
          gold-text
          mb-16"
        >
          OUR STATS
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat,index)=>(

            <div
              key={index}
              className="
              bg-zinc-950
              border
              border-yellow-500/20
              rounded-3xl
              p-8
              text-center"
            >

              <div
                className="
                text-yellow-400
                text-5xl
                mb-4"
              >
                {stat.icon}
              </div>

              <h3
                className="
                text-4xl
                font-black"
              >
                <CountUp
                  end={stat.value}
                  duration={3}
                />

                {stat.suffix}
              </h3>

              <p
                className="
                text-gray-400
                mt-3"
              >
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}