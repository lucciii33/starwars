import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const InfoPlanets = (prop) => {
  var adrrees = prop.location.state;
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{adrrees.name}</h5>
          <p className="card-text">{adrrees.population}</p>
          <a href="#" className="btn btn-primary">{adrrees.climate}</a>
          <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
        </div>
      </div>
    )
}
InfoPlanets.propTypes = {
  plan: PropTypes.object,
  //name: PropTypes.string,
 //gender: PropTypes.string,
  //height: PropTypes.string,
  //skin_color: PropTypes.string,
  //eye_color: PropTypes.string,
  
}
