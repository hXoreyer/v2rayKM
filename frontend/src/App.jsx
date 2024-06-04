import "./App.css"
import iconSVG from "./assets/images/icon.svg"
import minSVG from "./assets/images/min.svg"
import maxSVG from "./assets/images/max.svg"
import closeSVG from "./assets/images/close.svg"
import Index from "./index"

function App() {
  const handleMinimize = () => {
    window.runtime.WindowMinimise()
  }

  const handleMaximize = () => {
    window.runtime.WindowToggleMaximise()
  }

  const handleClose = () => {
    window.runtime.Quit()
  }
  return (
    <div id="App">
      <div
        id="title"
        className="bg-white text-black p-2 flex justify-between shadow-md"
        style={{ "--wails-draggable": "drag", userSelect: "none" }}
      >
        <div className="ml-1 flex items-center gap-2">
          <img src={iconSVG} className="w-6 h-6" alt="logo"></img>
          <div className="text-sm font-bold">v2rayKM</div>
        </div>
        <div
          className="flex gap-2 mr-1 items-center"
          style={{ "--wails-draggable": "no-drag", userSelect: "none" }}
        >
          <img
            src={minSVG}
            onClick={handleMinimize}
            className="title_img"
          ></img>
          <img
            src={maxSVG}
            onClick={handleMaximize}
            className="title_img"
          ></img>
          <img src={closeSVG} onClick={handleClose} className="title_img"></img>
        </div>
      </div>
      <div>
        <Index></Index>
      </div>
    </div>
  )
}

export default App
