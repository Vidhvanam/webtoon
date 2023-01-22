import { NavLink } from "react-router-dom"
import { BsFillSuitHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";


export default function Card({series}){
  
  return(
   
      // <div className="col">
        <NavLink className="card-container" to={`/series/${series._id}`}>
          <img src={process.env.PUBLIC_URL+"img/sweet.jpg"} className="card-img-top" alt="..."/>
          <div className="card-img-overlay">
            <h5 className="card-title">{series.name}</h5>
            <p className="pos-bot">{series.genres.join(' / ')}</p>
            <div>One</div>
           <AiFillStar style={{color : 'var(--main-color)'}}/> <span className="main-txt-color">{series.ratting}/10</span>

          </div>
          <div className="card hover-component">
          <h5 className="card-title">{series.name}</h5>
              <p className="card-text">{series.description.substring(0,220)+ '....'}</p>   
           </div> 
        </NavLink>
      // </div>
 
  )
}