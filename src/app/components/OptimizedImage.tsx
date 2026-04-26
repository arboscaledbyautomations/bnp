import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export function OptimizedImage({ src, alt, className = "", aspectRatio }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
  }, [src]);

  if (hasError) {
    return (
      <div
        className={`${className} bg-secondary/30 flex items-center justify-center`}
        style={{ aspectRatio }}
      >
        <div className="text-center text-muted-foreground">
          <svg
            className="w-16 h-16 mx-auto mb-2 opacity-30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-sm">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isLoaded && (
        <div
          className={`${className} bg-secondary/30 animate-pulse`}
          style={{ aspectRatio }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      )}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        loading="lazy"
        style={{ display: isLoaded ? 'block' : 'none' }}
      />
    </>
  );
}
