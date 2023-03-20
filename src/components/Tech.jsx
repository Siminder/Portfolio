import { BallCanvas } from "./canvas"; 
import { SectionWrapper } from "../hoc"; 
import { technologies } from "../constants"; 

// Define the Tech component that renders the technology icons using the BallCanvas component
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10"> {/* Flex container to display the technology icons */}
      {technologies.map((technology) =>  // Map over the technologies data to render each technology icon
        <div className="w-28 h-28" key={technology.name}> {/* Set the dimensions of each technology icon */}
          <BallCanvas icon={technology.icon} /> {/* Render the technology icon using the BallCanvas component */}
        </div>
      )}
    </div>
  )
}

export default SectionWrapper(Tech,'') 

