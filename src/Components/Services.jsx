import {
  FaCode,
  FaRocket,
  FaLaptopCode,
  FaLightbulb
} from "react-icons/fa";

const services = [
  {
    icon:<FaCode />,
    title:"Coding Tutorials",
    desc:"Step by step tutorials for programming languages."
  },

  {
    icon:<FaLaptopCode />,
    title:"Web Development",
    desc:"Build modern and responsive websites."
  },

  {
    icon:<FaRocket />,
    title:"Projects",
    desc:"Real-world projects to boost your portfolio."
  },

  {
    icon:<FaLightbulb />,
    title:"Tips & Tricks",
    desc:"Smart tricks to save time and write better code."
  }
];

export default function Services() {

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
          WHAT WE OFFER
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {services.map((service,index)=>(

            <div
              key={index}
              className="
              bg-zinc-950
              border
              border-yellow-500/20
              rounded-3xl
              p-8
              hover:border-yellow-500
              transition-all"
            >

              <div
                className="
                text-yellow-400
                text-5xl
                mb-6"
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold">
                {service.title}
              </h3>

              <p
                className="
                text-gray-400
                mt-4"
              >
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}