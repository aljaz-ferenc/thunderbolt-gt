import "./Section2.css";
import { motion } from "framer-motion";

export default function Section2() {
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
      className="section section2"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="section__content" key="1">
        <p className="section__text">
        THUNDERBOLT's exhaust system has been meticulously engineered to provide a
          perfect balance between performance and sound. The exhaust not only
          enhances the car's overall performance but also gives it a distinctive
          sound that sets it apart from other cars on the road.
        </p>
        <table>
          <tbody>
            <motion.tr variants={boxVariants}>
              <td>Top track speed</td>
              <td>170 mp</td>
            </motion.tr>
            <motion.tr variants={boxVariants}>
              <td>0 - 60 mph (Manual)</td>
              <td>4.9 s</td>
            </motion.tr>
            <motion.tr variants={boxVariants}>
              <td>0 - 60 mph (PDK (Automatic))</td>
              <td>4.7 s</td>
            </motion.tr>
            <motion.tr variants={boxVariants}>
              <td>0 - 60 mph with Sport Package</td>
              <td>4.9 s</td>
            </motion.tr>
            <motion.tr variants={boxVariants}>
              <td>Max. torque</td>
              <td>280 lb-ft</td>
            </motion.tr>
            <motion.tr variants={boxVariants}>
              <td>Max. power per liter</td>
              <td>150.0 hp/l</td>
            </motion.tr>
          </tbody>
        </table>
      </motion.div>
    </motion.section>
  );
}
