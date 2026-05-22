import { motion } from "framer-motion";
import {
  FaBullseye,
  FaBrain,
  FaChartLine
} from "react-icons/fa";

const data = [
  {
    icon: <FaBullseye size={45} />,
    title: "Focused Content",
    desc: "Only quality content that helps you learn and grow."
  },
  {
    icon: <FaBrain size={45} />,
    title: "Practical Learning",
    desc: "Learn by building real projects and solving problems."
  },
  {
    icon: <FaChartLine size={45} />,
    title: "Grow Together",
    desc: "We grow together, learn together and succeed together."
  }
];

export default function About() {
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
          WHY DEBUG BRAIN?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {data.map((item,index)=>(
            <motion.div
              key={index}
              whileHover={{
                y:-10,
                scale:1.03
              }}
              className="
              p-8
              rounded-3xl
              border
              border-yellow-500/20
              bg-zinc-950"
            >

              <div className="text-yellow-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}