import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphram from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
	return (
		<div className="services">
			<div className="description">
				<h2>
					High <span>Quality</span> services
				</h2>
				<div className="cards">
					<div className="card">
						<div className="icon">
							<img src={clock} alt="icon" />
							<h3>Efficient</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>

				<div className="cards">
					<div className="card">
						<div className="icon">
							<img src={teamwork} alt="icon" />
							<h3>Teamwork</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>

				<div className="cards">
					<div className="card">
						<div className="icon">
							<img src={diaphram} alt="icon" />
							<h3>Diaphram</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>

				<div className="cards">
					<div className="card">
						<div className="icon">
							<img src={money} alt="icon" />
							<h3>Affordable</h3>
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
			</div>

			<div className="image">
				<img src={home2} alt="camera" />
			</div>
		</div>
	);
};

export default ServicesSection;
