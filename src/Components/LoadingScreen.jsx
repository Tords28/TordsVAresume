import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onFinish }) {
  const [loading, setLoading] = useState(true);
    
  
  const MotionDiv = motion.di

  useEffect(() => {
    // Simulate loading (e.g. API calls, assets, etc.)
    const timer = setTimeout(() => {
      setLoading(false);
      if (onFinish) onFinish();
    }, 2500); 

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#1a252f] z-50">
      {/* Logo or Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-white text-5xl font-bold mb-4"
      >
        JB
      </motion.div>

      {/* Animated loading bar */}
      <div className="h-2 w-52 bg-gray-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-full bg-white"
        />
      </div>

      <p className="text-white mt-3 text-sm">Loading...</p>
    </div>
  );
}
