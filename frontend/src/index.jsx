import React from "react"
import StartButton from "./components/startButton"

const Index = () => {
  return (
    <div>
      <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%]">
        <StartButton />
        <span>running...</span>
      </div>
    </div>
  )
}

export default Index
