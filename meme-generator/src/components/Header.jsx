import imgSrc from "../assets/TrollFace.png"
export default function Header(){

    return(
       <div className="navBar">
        <img src= {imgSrc} alt ="img" />
        
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
       </div> 
    )
}

