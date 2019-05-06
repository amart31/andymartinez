//create your first component
import React from "react";
import avatar from "../../img/avatar.jpeg";
import SkillsProgress from "./stackProgress";

//include images into your bundle
const About = () => {
	return (
		<React.Fragment>
			<div className="col d-flex justify-content-between">
				<img className="avatarImg" src={avatar} />
				<img className="avatarImg" src={avatar} />
				<img className="avatarImg" src={avatar} />
				<img className="avatarImg" src={avatar} />
				<img className="avatarImg" src={avatar} />
			</div>

			<div className="w-100" />
			<div className="col-6 m-auto">
				<img className="avatarImg" src={avatar} />
				<p>Web developer from Miami, FL </p>
			</div>
			<div className="col-6 m-auto">
				<SkillsProgress />
			</div>
		</React.Fragment>
	);
};

export default About;
