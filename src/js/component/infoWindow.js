import React from "react";

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

function InfoWindow(props) {
	return (
		<div>
			<Card>
				<CardImg
					top
					width="300px"
					src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
					alt="Card image cap"
				/>
				<CardBody>
					<CardTitle>Istanbul</CardTitle>
					<CardSubtitle>Card subtitle</CardSubtitle>
					<CardText>
						{" "}
						Istanbul is a major city in Turkey that straddles Europe and Asia across the Bosphorus Strait.
					</CardText>
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

export default InfoWindow;
