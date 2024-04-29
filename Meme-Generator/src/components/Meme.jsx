import memesData from "../memesData"
import { useState } from "react"

function Meme(){

    const [memeImage,setMemeImage] = useState("")


    function handleClick(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        //const url = memesArray[randomNumber].url
        setMemeImage(memesArray[randomNumber].url)
    }

    return(
        <main>
            <div className="form">
                
                <label htmlFor="top-text">Top Text</label>
                <input 
                    id="top-text"
                    type="text" 
                    placeholder="Shut up"
                    className="form--input"
                />
                
               
                
                    <label htmlFor="bottom-text">Bottom Text</label>
                    <input 
                    id="bottom-text"
                    type="text" 
                    placeholder="and take my money"
                    className="form--input"
                    />
                    
                
                <button
                    className="form--button" onClick ={handleClick}
                >   Get a new meme image 🖼</button>
            </div>

            <img src={memeImage} className="meme--image"/>
        </main>
    )

    
}

export default Meme