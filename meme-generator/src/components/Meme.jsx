import React from "react"
import memesData from "../memeData.js"

export default function Meme() {
        
    const [meme, setMeme] = React.useState(
        {topText:"",
        bottomText:"",
        randomImg:"https://i.imgflip.com/30b1gx.jpg"}
    )
    const [allMemeImages] = React.useState(memesData)
   
    function handleText(event){
        const {name, value}=event.target
       setMeme(prevMeme => ({
           ...prevMeme,
           [name]:value
          
       }))
       
  }
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url=memesArray[randomNumber].url
        setMeme(prev=>({
            ...prev,
            randomImg:url
        }))
        
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name='topText'
                    value={meme.topText}
                    onChange={handleText}
                    />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleText}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImg} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}