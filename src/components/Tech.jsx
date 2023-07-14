import React from 'react'
import { BallCanvas } from "./canvas" 
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

import { useState } from 'react'

const Tech = () => {

const [ tech, setTech ] = useState(null)

const handleHover = (tech)=>{
  setTech(tech)
}

const handleHoverLeave = ()=>{
  setTech(null)
}

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name} onMouseEnter={()=>handleHover(technology)} onMouseLeave={handleHoverLeave}>
          <BallCanvas icon={technology.icon}/>
          {
            tech === technology && (
              <span className='absolute align-top pl-4 text-center text-secondary font-medium'>{tech.name}</span>
            ) 
          }
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")