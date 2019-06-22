import React from "react";

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

class InfoWindow extends Comment {
	render() {
		return (
			<div>
				<Card>
					<CardImg
						top
						width="50%"
						src="https://github.com/amart31/final-project-frontend"
						alt="Card image cap"
					/>
					<CardBody>
						<CardTitle>Miami</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText> Miami is a major city.</CardText>
						<Button size="small" color="primary">
							Share
						</Button>
						<Button size="small" color="primary">
							Learn More
						</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default InfoWindow;
