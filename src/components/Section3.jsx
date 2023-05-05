import { motion } from "framer-motion";
import "./Section3.css";

export default function Section3() {
  const sectionVariants = {
    hidden: {
      x: 1000,
      transition: {
        staggerChildren: 0.2,
      },
    },
    visible: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const boxVariants = {
    hidden: {
      y: 100,
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
      <motion.div className="section__content" variants={boxVariants} key="1">
        <p className="section__text">
          And finally, the stunning exterior design will turn heads wherever you
          go, with its sleek lines and bold, modern look. Experience the thrill
          of driving our car today and discover a new level of sophistication
          and performance.
        </p>
        <table>
          <tbody>
            <tr>
              <td>Limited vehicle warranty</td>
              <td>	4 years/50,000 miles</td>
            </tr>
            <tr>
              <td>Limited paint warranty</td>
              <td>4 years/50,000 miles</td>
            </tr>
            <tr>
              <td>Limited corrosion warranty</td>
              <td>12 years/unlimited miles</td>
            </tr>
            <tr>
              <td>Manual</td>
              <td>From $ 68,300</td>
            </tr>
            <tr>
              <td>PDK (Automatic)</td>
              <td>From $ 71,510</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
}
