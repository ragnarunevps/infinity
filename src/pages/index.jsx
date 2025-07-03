import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function DemonSlayerSite() {
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.title = "Demon Slayer: Infinity Castle";
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToVideo = () => {
    setShowVideo(true);
    setTimeout(() => {
      document.getElementById("video-container")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[url('/castle-bg.jpg')] bg-cover bg-center opacity-40" />

      {/* Loading */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1.2 }}
              exit={{ scale: 0 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 blur-xl animate-pulse"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      {!loading && (
        <div className="relative z-10 flex flex-col items-center">
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
            className="mt-6 max-w-xl text-center text-lg md:text-xl text-gray-200"
          >
            Experience the ultimate showdown in the most beautifully animated arc of Demon Slayer. Watch now in HD.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10"
          >
            <button
              onClick={scrollToVideo}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold bg-gradient-to-tr from-purple-600 to-pink-600 rounded-2xl shadow-lg hover:scale-105 transition-transform"
            >
              <PlayCircle className="w-6 h-6" />
              Watch Now
            </button>
          </motion.div>

          {/* Embedded Video (Initially Hidden) */}
          <AnimatePresence>
            {showVideo && (
              <motion.div
                id="video-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="mt-12 w-full max-w-4xl aspect-video z-10"
              >
                <div className="w-full h-full rounded-xl overflow-hidden shadow-xl border-2 border-pink-500">
                  <iframe
                    src="https://drive.google.com/file/d/1fCy3zcx_woCR0xfrRxHI5j3j1REp7dtJ/preview"
                    allow="autoplay"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </main>
  );
}
