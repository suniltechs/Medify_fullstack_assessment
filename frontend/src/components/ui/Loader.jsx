import { motion } from 'framer-motion';

export const Loader = ({ size = 'md', color = 'indigo' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 border-3',
    md: 'w-12 h-12 border-4',
    lg: 'w-16 h-16 border-4'
  };

  const colorClasses = {
    indigo: 'border-indigo-500 border-t-transparent',
    accent: 'border-accent-light border-t-transparent',
    white: 'border-white border-t-transparent'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`rounded-full ${sizeClasses[size]} ${colorClasses[color]}`}
    />
  );
};