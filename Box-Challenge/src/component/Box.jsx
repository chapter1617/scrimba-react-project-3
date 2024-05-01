
import { useState } from "react"

function Box(props){
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */

    //const [on,setOn] = useState(props.on)

    const styles  = {
        backgroundColor: props.on ? '#222222' : 'transparent'
    }
    
    // function toggle(){
    //     setOn(prevOn => !prevOn)
    // }

    return(
        // <div className="box" style={styles} onClick={()=>props.toggle(props.id)}></div>
        //<div className="box" style={styles} onClick={props.toggle}></div> // Alternate way to simplify above 
        <button                     
            style={styles} 
            className="box"
            onClick={props.toggle}
        >
        </button>   // /* for accecibility */
    )
}

export default Box