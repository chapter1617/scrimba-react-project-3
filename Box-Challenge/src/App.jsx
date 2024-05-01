import { useState } from "react"
import boxes from "./boxes"
import Box from "./component/Box"

function App() {
  
const [squares , setSquares] = useState(boxes)

 /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */
    

const squareElements = squares.map( square => (
  
  <Box on={square.on} key={square.id}/>
)

)

  return (
    <main>
            <h1>Boxes will go here</h1>
            {squareElements}
    </main>
  )
}

export default App
