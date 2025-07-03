import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

// Official release: Sept 12 2025 at 00:00 IST → add 3h for our activation portal
const RELEASE = new Date("2025-09-12T03:00:00+05:30");

export default function DemonSlayerSite() {
  const [loading, setLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);
  const [timeDiff, setTimeDiff] = useState(getDiff());

  useEffect(() => {
    document.title = "Demon Slayer: Infinity Castle";
    const loadTimer = setTimeout(() => setLoading(false), 2000);

    const interval = setInterval(() => {
      setTimeDiff(getDiff());
    }, 1000);

    return () => {
      clearTimeout(loadTimer);
      clearInterval(interval);
    };
  }, []);

  function getDiff() {
    const now = new Date();
    const diff = RELEASE - now;
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);
    return { days, hours, mins, secs };
  }

  const scrollToVideo = () => {
    setShowVideo(true);
    setTimeout(() => {
      document.getElementById("video-container")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const renderCountdown = () => {
    if (!timeDiff) return null;
    const { days, hours, mins, secs } = timeDiff;
    if (days > 0) return `${days} day${days>1?'s':''} ${hours} h ${mins} m`;
    return `${hours} h ${mins} m ${secs} s`;
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/castle-bg.jpg')] bg-cover bg-center opacity-40" />

      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onAnimationComplete={() => setLoading(false)}
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
      ) : null}

      {!loading && (
        <div className="relative z-10 flex flex-col items-center">
          <motion.h1 className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Demon Slayer: Infinity Castle Arc
          </motion.h1>

          <motion.p className="mt-4 text-xl text-gray-200"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5 }}
          >
            {timeDiff ? `Releasing in ${renderCountdown()}` : 'Now Streaming!'}
          </motion.p>

          <motion.button
            onClick={scrollToVideo}
            disabled={!timeDiff}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={timeDiff ? { scale: 1.05 } : {}}
            className={`mt-6 inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-2xl shadow-lg transition-transform ${
              timeDiff
                ? "bg-gradient-to-tr from-purple-600 to-pink-600 cursor-not-allowed opacity-50"
                : "bg-gradient-to-tr from-purple-600 to-pink-600 cursor-pointer hover:scale-105"
            }`}
          >
            <PlayCircle className="w-6 h-6" />
            {timeDiff ? "Coming Soon" : "Watch Now"}
          </motion.button>

          {showVideo && !timeDiff && (
            <motion.div id="video-container"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
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
        </div>
      )}
    </main>
  );
}
