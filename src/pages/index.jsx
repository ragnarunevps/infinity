import { useEffect } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function DemonSlayerSite() {
  useEffect(() => {
    document.title = "Demon Slayer: Infinity Castle";
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg"
      >
        Demon Slayer: Infinity Castle Arc
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="mt-6 max-w-xl text-center text-lg md:text-xl text-gray-300"
      >
        Experience the ultimate showdown in the most beautifully animated arc of Demon Slayer. Watch now in HD.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-10"
      >
        <a
          href="https://drive.google.com/file/d/1fCy3zcx_woCR0xfrRxHI5j3j1REp7dtJ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold bg-gradient-to-tr from-purple-600 to-pink-600 rounded-2xl shadow-lg hover:scale-105 transition-transform"
        >
          <PlayCircle className="w-6 h-6" />
          Watch Now
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 3, delay: 2 }}
        className="absolute inset-0 bg-[url('/castle-bg.jpg')] bg-cover bg-center blur-3xl"
      />
    </main>
  );
}
