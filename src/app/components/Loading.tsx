import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface LoadingProps {
  onComplete: () => void;
}

export function Loading({ onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-primary-foreground/95 p-2">
            <img
              src="/src/imports/628416718_1880669882553704_5731532768269270336_n.jpg"
              alt="BNP Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl text-primary-foreground mb-2"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Bread N Pastry Co.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-accent uppercase tracking-[0.3em] text-sm mb-12"
        >
          Est. 2026
        </motion.p>

        {/* Animated Wheat Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: [0, 1, 0.9, 1] }}
              transition={{
                duration: 1.2,
                delay: 0.8 + index * 0.15,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <svg
                width="24"
                height="40"
                viewBox="0 0 24 40"
                fill="none"
                className="text-accent"
              >
                <path
                  d="M12 0C12 0 8 8 8 12C8 14 10 16 12 16C14 16 16 14 16 12C16 8 12 0 12 0Z"
                  fill="currentColor"
                />
                <path
                  d="M12 8C12 8 10 12 10 14C10 15 11 16 12 16C13 16 14 15 14 14C14 12 12 8 12 8Z"
                  fill="currentColor"
                  opacity="0.7"
                />
                <line
                  x1="12"
                  y1="16"
                  x2="12"
                  y2="40"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-primary-foreground/20 overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-primary-foreground/80 text-sm mt-4"
            style={{ fontFamily: 'var(--font-serif-alt)' }}
          >
            Baking fresh for you...
          </motion.p>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-accent/30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 20,
          }}
          animate={{
            y: -20,
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
}
