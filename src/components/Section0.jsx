import { motion } from "framer-motion";
import "./Section0.css";

export default function Section0() {
  const sectionVariants = {
    hidden: {
      x: '-100vw',
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
      className="section section0"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="section__content" key="1">
        <p className="section__text">
          Introducing our sleek and stylish THUNDERBOLT-GT, designed to take your driving
          experience to the next level. With its powerful engine and smooth
          handling, you'll feel the rush of excitement every time you get behind
          the wheel. Our car is packed with advanced features to make your
          journey as comfortable and safe as possible.
        </p>
        <table>
          <tbody>
            <motion.tr variants={boxVariants} >
              <td>Front luggage compartment volume</td>
              <td>5.2 ft³</td>
            </motion.tr >
            <motion.tr variants={boxVariants}>
              <td>Rear luggage compartment volume</td>
              <td>9.7 ft³</td>
            </motion.tr>
            <motion.tr variants={boxVariants}>
              <td>Fuel tank</td>
              <td>14.2 gal</td>
            </motion.tr>
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
}
