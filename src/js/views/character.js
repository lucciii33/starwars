import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Characters = (props)=>{
  console.log("props", props);
    return(
 <div className="container flex-wrap">
    
    <div className="card" style={{width: '18rem'}}>
  <img src="https://fivethirtyeight.com/wp-content/uploads/2014/07/499502015tc035_star_wars_ex.jpg?w=2700" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.cha.name}</h5>
    <p className="card-text">Gender: {props.cha.gender}</p>
    <p className="card-text">Height: {props.cha.height}</p>
    <p className="card-text">Skin color: {props.cha.skin_color}</p>
    <p className="card-text">Eye color: {props.cha.eye_color}</p>
    <Link
     to={{pathname: "/information/"+ props.cha.name, state: props.cha}}>
		<button className="btn btn-primary">Information</button>
	 </Link>
   </div>
   </div>
        </div>
    );
};
Characters.propTypes = {
  cha: PropTypes.object,
  //name: PropTypes.string,
 //gender: PropTypes.string,
  //height: PropTypes.string,
  //skin_color: PropTypes.string,
  //eye_color: PropTypes.string,
  
}