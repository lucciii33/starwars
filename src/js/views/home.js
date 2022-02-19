
import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { Characters } from "./character";
import { Information } from "./information";
import { Planets } from "./planets";


export const Home = () =>{
	const [chart, setChart] = useState([]);
	const [planet, setPlanet] = useState([]);
 
	
	const fetchFu = async () => {
		const res = await fetch('https://swapi.dev/api/people');
		const data = await res.json();
		setChart(data.results);
		console.log(data.results);
	};
	const fetchPl = async () => {
		const res = await fetch('https://swapi.dev/api/planets');
		const data = await res.json();
		setPlanet(data.results);
		console.log(data.results);
	};

	useEffect(() => {
		fetchFu(),fetchPl()
	}, []);
	return(

	<div className="container">
		<div className="scroll">
			<div className="d-flex p-2">
				{chart.map((cha , i)=>{
					console.log(i);
					return (
						<div key={i}>
						<Characters cha={cha}/>

						</div>
					

				
			)	
			})}
		</div>
		
	 </div>

	 <div className="scroll">
	 <div className="d-flex p-2">
	 {planet.map((plan , index)=>{
		 console.log(index);
			return (
				<div key={index}>
					<Planets  plan={plan}/>
					
				</div>

				
			)	
			})}
		
	</div>
	</div>
	</div>

	
);
	};
