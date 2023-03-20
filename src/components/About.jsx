import React from 'react'
import Tilt from "react-tilt";
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

// ServiceCard component for rendering individual service cards
const ServiceCard = ({index, title, icon}) => {
  return (

    // Tilt component for adding a subtle tilt effect to the service card
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      // Framer Motion animation for fading in the service card from the right
        variants={fadeIn("right", "spring",  
        index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] 
        rounded-[20px] shadow-card"
      >
      <div
      // React Tilt option for controlling the tilt effect

        options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5
        px-12 min-h-[280px] flex 
        justify-evenly items-center flex-col"
      >
      {/* Icon for the service */}
        <img src={icon} alt={title}
        className="w-15 h-16 object-contain"
        />
        {/* Title of the service */}
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

      </div>

      </motion.div>
    </Tilt>
  )
}

// About component for rendering the About section
const About = () => {
  return (
    <>
    {/* Framer Motion animation for the section introduction and heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Paragraph describing the skills and experience */}
      <motion.p 
      variants={fadeIn(" ", " ", 0.1, 1)}
      className="mt-4 text-secondary text[17px] max-w-3xl leading-[30px]">

        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!

      </motion.p>
      
        {/* Section for displaying services offered */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Map through the array of services and render a ServiceCard for each */}
          {services.map((services, index) => (
            <ServiceCard key={services.title} index= {index} {...services} />
          ))}
      </div>


    </>
  )
}

export default SectionWrapper(About, "about");