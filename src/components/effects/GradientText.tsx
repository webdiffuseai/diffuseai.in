'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Adjust path if your `utils.ts` is elsewhere

interface GradientTextProps {
  children: string;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

const defaultColors = ['#ff0080', '#7928ca', '#0070f3'];

const GradientText = ({
  children,
  className,
  colors = defaultColors,
  animationSpeed = 5,
  showBorder = false,
}: GradientTextProps) => {
  const gradientString = `linear-gradient(270deg, ${colors.join(', ')})`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1
        className={cn(
          'bg-clip-text text-transparent font-extrabold inline-block',
          showBorder ? 'border-2 border-white p-2 rounded-xl' : '',
          className
        )}
        style={{
          backgroundImage: gradientString,
          backgroundSize: '600% 600%',
          animation: `gradientFlow ${animationSpeed}s ease infinite`,
        }}
      >
        {children}
      </h1>

      {/* Keyframes */}
      <style>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default GradientText;
