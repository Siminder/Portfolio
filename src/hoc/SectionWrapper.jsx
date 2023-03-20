import { motion } from "framer-motion"; 
import { styles } from "../styles"; 
import { staggerContainer } from "../utils/motion"; 

// Define a Higher-Order Component (HOC) called StarWrapper
// The HOC takes two arguments: the component to be wrapped (Component) and the ID for the hash symbol (idName)
const StarWrapper = (Component, idName) =>
  function HOC() { // Returns a function that returns JSX
    return (
      <motion.section // Wrap the component in a motion section to enable animations
        variants={staggerContainer()} // Set the animation variants using the staggerContainer function
        initial='hidden' // Set the initial state of the animation to "hidden"
        whileInView='show' // Animate the section while it is in view
        viewport={{ once: true, amount: 0.25 }} // Set the animation to play only once when the section is 25% in view
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Add styling classes to the section
      >
        <span className='hash-span' id={idName}>
          &nbsp; {/* Add a space character to the span */}
        </span>

        <Component /> {/* Render the component */}
      </motion.section>
    );
  };


export default StarWrapper;
