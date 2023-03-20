import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// This is a functional component that defines the hero section of the webpage.
const Hero = () => {
  // The component returns JSX code that defines the layout and contents of the hero section.
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* This div contains the main content of the hero section, including the heading and subtext. */}
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[120px] maz-w-7xl mz-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
            <div className="w-1 sm:h-80 h-49 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} 
          text-white`}>Hi, I'm 
          <span className="text-[#915eff]"> Siminder</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-whiter-100`}>
          I'm a passionate full stack developer skilled in <br className="sm:block hidden"/> 
          Es6, React, and JavaScript. 
          I excel in building efficient and user-friendly software applications with experience in frontend, backend, databases, and web servers.
          </p>
        </div>
      </div>
      
      {/* This component renders the animated background canvas of the hero section. */}
      <ComputersCanvas />

      {/* This div contains the animated arrow icon that links to the "about" section of the webpage. */}
      <div className="absolute xs:bottom-10 
      bottom-32 w-full flex 
      justify-center items-center">
        <a href="#about">
          <div className='w-[35px] h-[64px] 
          rounded-3xl border-4 border-secondary 
          flex justify-center items-start p-2'>
            {/* This is the animated arrow icon that uses Framer Motion to animate the bouncing effect. */}
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}


export default Hero
