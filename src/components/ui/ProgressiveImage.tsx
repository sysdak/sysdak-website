import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  loadingClassName?: string;
  onLoad?: () => void;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  placeholder,
  className = '',
  loadingClassName = '',
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setIsError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      <AnimatePresence>
        {!isLoaded && !isError && (
          <motion.div
            className={`absolute inset-0 bg-gray-200 ${loadingClassName}`}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}

      {/* Main image */}
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={isLoaded ? {
          opacity: 1,
          scale: 1
        } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default ProgressiveImage;