import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useVelocity } from 'framer-motion';
import { Send, X } from 'lucide-react';
import { socials } from '../../data/socials';
import SocialIcon from './SocialIcon';

export default function SocialsFab({ show, scrollY }) {
  const [open, setOpen] = useState(false);

  const velocity = useVelocity(scrollY);
  const [isFastScrolling, setIsFastScrolling] = useState(false);

  useEffect(() => {
    const unsubscribe = velocity.on('change', (v) => {
      setIsFastScrolling(Math.abs(v) > 300);
    });
    return unsubscribe;
  }, [velocity]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="fab"
        initial={{ opacity: 0, x: -20, scale: 0.9 }}
        animate={{
          opacity: show ? 1 : 0,
          x: show ? 0 : -20,
          scale: show ? 1 : 0.9,
        }}
        exit={{ opacity: 0, x: -20, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className="fixed top-4 left-3 z-50"
      >
        {/* WRAPPER handles tap scaling */}
        <motion.div whileTap={{ scale: 0.94 }}>
          <motion.div
            layout
            animate={{
              width: open ? 220 : 44,
              height: open ? 240 : 44,
              borderRadius: open ? 20 : 999,
              borderWidth: open ? 2 : 0,
              borderColor: 'rgba(248, 133, 85, 0.5)',
            }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 28,
              default: { duration: 0.25, ease: 'easeInOut' },
            }}
            className="bg-orange-600/50 border-orange-500 border-opacity-20 backdrop-blur-md shadow-lg overflow-hidden relative"
          >
            {/* CLOSED */}
            {!open && (
              <button
                onClick={() => setOpen(true)}
                className="w-full h-full flex items-center justify-center text-white"
              >
                <Send size={21} style={{ transform: 'translateX(-2px) translateY(1px)' }} />
              </button>
            )}

            {/* OPEN */}
            {open && (
              <>
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-1 right-1 p-2 text-white/80 z-50"
                >
                  <X size={20} />
                </button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="p-6 pb-3"
                >
                  {/* HEADER */}
                  <h2 className="text-white text-xl mb-4">Connect with me</h2>

                  {/* ICONS */}
                  <div className="flex flex-col gap-6">
                    {socials.map((s, i) => (
                      <motion.a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 + i * 0.05 }}
                        className="flex items-center gap-4 text-white"
                      >
                        <SocialIcon social={s} size={18} />
                        <span className="text-xs text-white/80">{s.description}</span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
