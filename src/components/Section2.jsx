import "./Section2.css";
import { motion } from "framer-motion";

export default function Section2() {
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
      className="section section2"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div className="section__content" variants={boxVariants} key="1">
        <p className="section__text">
          Our car's exhaust system has been meticulously engineered to provide a
          perfect balance between performance and sound. The exhaust not only
          enhances the car's overall performance but also gives it a distinctive
          sound that sets it apart from other cars on the road.
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
