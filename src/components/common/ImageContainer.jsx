import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, User } from 'lucide-react';

export default function ImageContainer({ 
  src, 
  alt, 
  type = 'project', // 'project' or 'profile'
  className = '' 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const isProfile = type === 'profile';
  const baseClasses = "relative overflow-hidden bg-slate-800 flex items-center justify-center";
  const shapeClasses = isProfile ? "rounded-full aspect-square" : "rounded-xl aspect-video w-full";

  return (
    <div className={`${baseClasses} ${shapeClasses} ${className}`}>
      {/* Skeleton Loading State */}
      <AnimatePresence>
        {!isLoaded && !hasError && (
          <motion.div
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-700 animate-pulse"
          />
        )}
      </AnimatePresence>

      {/* Fallback Icon if image fails or is missing */}
      {(!src || hasError) ? (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50 border border-slate-700">
          {isProfile ? (
            <User className="text-slate-500 w-1/2 h-1/2" />
          ) : (
            <ImageIcon className="text-slate-500 w-12 h-12" />
          )}
        </div>
      ) : (
        /* Actual Image */
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 }}
          transition={{ duration: 0.4 }}
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`object-cover w-full h-full transition-transform duration-500 hover:scale-110 ${isProfile ? 'rounded-full' : ''}`}
          loading="lazy"
        />
      )}
    </div>
  );
}