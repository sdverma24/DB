import { motion } from "framer-motion";
import LogoScene from "../three/LogoScene";

export default function Hero() {
  return (
    <section
      className="
      min-h-screen
      hero-grid
      flex
      items-center"
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        lg:grid-cols-2
        gap-20
        items-center"
      >

        <div>

          <motion.span
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            className="
            border
            border-yellow-500
            px-4
            py-2
            rounded-full"
          >
            Welcome To
          </motion.span>

          <h1
            className="
            text-6xl
            md:text-8xl
            font-black
            mt-6
            gold-text"
          >
            DEBUG
            <br />
            BRAIN
          </h1>

          <h2
            className="
            text-2xl
            md:text-4xl
            font-bold
            mt-4"
          >
            CODE. CREATE. CONQUER.
          </h2>

          <p
            className="
            text-gray-400
            mt-8
            max-w-xl"
          >
            Level up your programming
            skills with Java,
            Web Development,
            Projects,
            Tutorials and
            Logic Building.
          </p>

          <div className="flex gap-4 mt-10">

            <button
              className="
              bg-yellow-500
              text-black
              px-8
              py-4
              rounded-xl
              font-bold"
            >
              Subscribe
            </button>

            <button
              className="
              border
              border-yellow-500
              px-8
              py-4
              rounded-xl"
            >
              Instagram
            </button>

          </div>

        </div>

        <div className="h-162.5">

          <LogoScene />

        </div>

      </div>
    </section>
  );
}