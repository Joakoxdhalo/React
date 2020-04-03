import React from 'react';
import "./styles/Badge.css";

import confLogo from "../images/LionsLogo.svg";
import profileLogo from "../images/Guepard.jpg";

class Badge extends React.Component {
	render() {
		return(
			<div className="Badge">
				<div className="Badge__header">
					<img src={confLogo} alt="Logo de la conference"/>
				</div>

				<div className="Badge__section-name">
					<img className="Badge__avatar" src={profileLogo} alt="Avatar"/>
					<h1>Crackio <br/>Jimeka</h1>
				</div>

				<div className="Badge__section-info">
					<p>Ingeniero Electrónico</p>
					<p>@Crackio</p>
				</div>

				<div className="Badge__footer">
					<p>#SigueElTuto</p>
				</div>
			</div>
		)
	}
}


export default Badge;