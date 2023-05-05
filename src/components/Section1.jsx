import "./Section1.css";
import { motion } from "framer-motion";

export default function Section1() {
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
      className="section section1"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="section__content" variants={boxVariants} key="1">
        <p className="section__text">
          To ensure maximum grip and control on any surface, our car is equipped
          with top-quality tires that provide exceptional traction and
          stability. These tires are specifically designed to handle a wide
          range of driving conditions, from dry pavement to wet or slippery
          surfaces, giving you the confidence to tackle any road.
        </p>
        <table>
          <tbody>
            <tr>
              <td>Bore</td>
              <td>91.0 mm</td>
            </tr>
            <tr>
              <td>Stroke</td>
              <td>76.4 mm</td>
            </tr>
            <tr>
              <td>Displacement</td>
              <td>1,988 cc</td>
            </tr>
            <tr>
              <td>Max. power</td>
              <td>300 hp</td>
            </tr>
            <tr>
              <td>Max. power at rpm</td>
              <td>6,500 rpm</td>
            </tr>
            <tr>
              <td>Max. engine speed</td>
              <td>7,500 rpm</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
}
