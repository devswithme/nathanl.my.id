// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const transition = (OgComponent, value) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed inset-0 w-screen h-screen bg-neutral-800 origin-top z-10"
        initial={{ scaleY: 1 }}
        onAnimationStart={() => {
          document.body.style.overflow = "hidden";
          document.body.style.cursor = "wait";

          setTimeout(() => {
            document.body.style.overflow = "auto";
            document.body.style.cursor = "default";
          }, 1000);
        }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0.25, 1, 0.25, 1],
        }}
      />
      <motion.h1
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: 1,
        }}
        className="text-center w-full text-4xl text-white z-20 fixed top-1/2 left-1/2 -translate-1/2"
      >
        {value}
      </motion.h1>
    </>
  );
};

export default transition;
