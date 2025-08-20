import { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "motion/react";

export const Parallax = ({
  children,
  className,
  outputRange = ["-10rem", "10rem"],
}) => {
  const div = useRef(null);

  const { scrollYProgress } = useScroll({
    target: div,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], outputRange);

  return (
    <motion.div style={{ y }} ref={div} className={className}>
      {children}
    </motion.div>
  );
};
