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

   /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */


   function toggle(id){
      setSquares(prevSquares => {
        const newSquares = []
        for(let i = 0; i < prevSquares.length; i++) {
            const currentSquare = prevSquares[i]
            if(currentSquare.id === id) {
                const updatedSquare = {
                    ...currentSquare,
                    on: !currentSquare.on
                }
                newSquares.push(updatedSquare)
            } else {
                newSquares.push(currentSquare)
            }
        }
        return newSquares
      })
   }

const squareElements = squares.map( square => (
  
  <Box 
  on={square.on} 
  key={square.id} 
  id={square.id} 
  toggle={toggle}
  />
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
