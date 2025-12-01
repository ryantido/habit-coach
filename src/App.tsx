import { useState } from "react"
import { SideBar } from "./components/SideBar"

export const App = () => {
  const [open, setOpen] = useState(true)
  return (
    <div>
    
    <div className="flex">
      <SideBar isDrawerOpen={open} />
      <div className="flex-1 flex items-center justify-center">Habbit Coach !
    <button onClick={() => setOpen(!open)}>Toggle - {open ? "open" : "closed"}</button>

      </div>
    </div>
    </div>
  )
}
