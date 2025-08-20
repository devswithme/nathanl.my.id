// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export const Title = ({ value, className }) => {
  const words = value.split(" ");

  return (
    <motion.h1 className={className}>
      {words.map((word, id) => (
        <motion.span key={id} className="inline-block mr-2 overflow-hidden">
          {word.split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ translateY: 200, scale: 0 }}
              animate={{ translateY: 0, scale: 1 }}
              transition={{
                duration: 1,
                delay: id * 0.4 + i * 0.1,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.h1>
  );
};
