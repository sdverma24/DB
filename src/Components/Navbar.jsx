import logo from "../assets/logo.png";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-yellow-500/20">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <motion.img
            whileHover={{ rotate: 10 }}
            src={logo}
            alt=""
            className="w-12 h-12 rounded-xl border border-yellow-500"
          />

          <h1 className="font-bold text-xl gold-text">
            DEBUG BRAIN
          </h1>

        </div>

        <div className="hidden md:flex gap-10">

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Videos</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>

        </div>

        <button
          className="
          px-5 py-2
          rounded-full
          bg-yellow-500
          text-black
          font-bold
          hover:scale-105
          transition"
        >
          Subscribe
        </button>

      </div>

    </nav>
  );
}