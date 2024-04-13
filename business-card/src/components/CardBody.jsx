
import imgSRC from '../assets/avatar.jpg';
import { CiMail } from "react-icons/ci";

export default function CardBody(){
    return(
<main className="businessCard">
    <div className="cardImg">
        <img src={imgSRC} alt="avatar" />
    </div>
    <div className="cardText">
        <h1 className="name">Khrystyna Kruk</h1>
        <h4>Frontend Developer</h4>
    </div>
   
    <div className="cardButton">
    <CiMail size={30} />

     <h2>  Email</h2>
    </div>
    <h2 className="about">
        <p>
            <h3>About</h3>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam earum blanditiis dignissimos explicabo ipsam dolorem soluta nesciunt veniam quisquam accusamus odio debitis, commodi iusto dolorum saepe voluptatum est consectetur hic.</span>
         </p>
        <p>
            <h3>Skills</h3>
        <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
        </ul>
          
         </p>
    </h2>
</main>

    )
}
