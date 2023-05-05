import { motion } from "framer-motion";
import "./Section3.css";

export default function Section3() {
  const sectionVariants = {
    hidden: {
      x: '100vw',
    },
    visible: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
    delayChildren: 0.5,
    ease: "linear",
      },
    },
  };

  const boxVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "linear",
      },
    },
  };

  return (
    <motion.section
      className="section section3"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="section__content" key="1">
        <p className="section__text">
          And finally, the stunning exterior design will turn heads wherever you
          go, with its sleek lines and bold, modern look. Experience the thrill
          of driving our car today and discover a new level of sophistication
          and performance.
        </p>
        <table>
          <tbody>
            <motion.tr variants={boxVariants}>
              <td>Limited vehicle warranty</td>
              <td>	4 years/50,000 miles</td>
            </motion.tr>
            <motion.tr variants={boxVariants}>
              <td>Limited paint warranty</td>
              <td>4 years/50,000 miles</td>
            </motion.tr>
            <motion.tr variants={boxVariants}>
              <td>Limited corrosion warranty</td>
              <td>12 years/unlimited miles</td>
            </motion.tr>
            <motion.tr variants={boxVariants}>
              <td>Manual</td>
              <td>From $ 68,300</td>
            </motion.tr>
            <motion.tr variants={boxVariants}>
              <td>PDK (Automatic)</td>
              <td>From $ 71,510</td>
            </motion.tr>
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
}
