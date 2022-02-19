import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Planets = (prop)=>{
  console.log("prop", prop);
    return(
 <div className="container flex-wrap">
    
    <div className="card" style={{width: '18rem'}}>
  <img src="https://www.wallpaperup.com/uploads/wallpapers/2014/01/24/236169/3867f5826f1599feab885a94aa8037c6-700.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{prop.plan.name}</h5>
    <p className="card-text">climate {prop.plan.climate}</p>
    <p className="card-text">population {prop.plan.population}</p>
    <Link
     to={{pathname: "/infoPlanets/"+ prop.plan.name, state: prop.plan}}>
		<button className="btn btn-primary">Information</button>
	 </Link>
  </div>
</div>
        </div>
    );
};
Planets.propTypes = {
  plan: PropTypes.object,
  // climate: PropTypes.string,
  // name: PropTypes.string,
  // population: PropTypes.string,
 
}