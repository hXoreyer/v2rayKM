import React, { useState } from "react"
import StartSVG from "../assets/images/start.svg"
import StopSVG from "../assets/images/stop.svg"

const StartButton = () => {
  const [isStart, setIsStart] = useState(false)
  const pushStart = () => {
    setIsStart(!isStart)
  }

  const imgClassName = `transition ease-in-out duration-300 
  h-45 w-45 cursor-pointer shadow-xl rounded-full hover:shadow-2xl 
  hover:scale-[98%] border-teal-200 border-2  bg-teal-100 select-none glow`

  return (
    <img
      src={isStart ? StopSVG : StartSVG}
      onClick={pushStart}
      className={imgClassName}
      draggable="false"
    />
  )
}

export default StartButton
