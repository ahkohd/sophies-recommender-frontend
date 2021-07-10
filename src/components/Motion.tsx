import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

export interface PageSlideMotionProps {
  children: ReactNode;
  className?: string;
  motion?: boolean;
}
export const PageSlideMotion: FC<PageSlideMotionProps> = (
  props: PageSlideMotionProps
) => {
  const { motion: animate = true } = props;

  const initial = {
    opacity: 0,
    translateX: animate ? 5 : 0,
  };

  return (
    <motion.div
      className={props.className}
      animate={
        animate
          ? {
              opacity: 1,
              translateX: 0,
            }
          : {
              opacity: 1,
            }
      }
      transition={{
        duration: 0.2,
      }}
      initial={initial}
      exit={initial}
    >
      {props.children}
    </motion.div>
  );
};
