import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export const Information = (props) => {
  var adrees = props.location.state;
    return (
        
         
      <div className="card mb-3" style={{maxWidth: "540px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src="https://fivethirtyeight.com/wp-content/uploads/2014/07/499502015tc035_star_wars_ex.jpg?w=2700" className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{adrees.name}</h5>
            <p className="card-text">Gender: {adrees.gender}</p>
            <p className="card-text">Height: {adrees.height}</p>
           <p className="card-text">Skin color: {adrees.skin_color}</p>
           <p className="card-text">Eye color: {adrees.eye_color}</p>
            
             <Link to="/">
		        <button className="btn btn-primary">back to Characters</button>
	          </Link>  
          </div>
        </div>
      </div>
    </div>
    )
}
Information.propTypes = {
  cha: PropTypes.object,
  //name: PropTypes.string,
 //gender: PropTypes.string,
  //height: PropTypes.string,
  //skin_color: PropTypes.string,
  //eye_color: PropTypes.string,
  
}