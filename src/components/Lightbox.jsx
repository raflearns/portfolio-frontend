import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

// Full-screen viewer for certificates and competition posters.
export default function Lightbox({ item, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!item) return;
    const previous = document.activeElement;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      previous?.focus?.();
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(6,11,20,0.88)] p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
        >
          <motion.figure
            className="relative max-h-full max-w-5xl"
            initial={{ scale: 0.96, y: 8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[80vh] w-auto rounded-[10px] shadow-2xl"
            />
            <figcaption className="mt-3 text-sm text-[var(--fog)]">{item.alt}</figcaption>
            <button
              ref={closeRef}
              onClick={onClose}
              className="absolute -top-3 -right-3 grid h-10 w-10 place-items-center rounded-full bg-[var(--paper)] text-[var(--ink)] hover:bg-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
