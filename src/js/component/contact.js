import React from "react";
import { Button } from "reactstrap";

import Title from "./title";
import GoogleMap from "../component/googleMap";

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			message: ""
		};

		this.name = React.createRef();
		this.email = React.createRef();
		this.message = React.createRef();
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<>
				<Title title="contact" />

				<div className="container-fluid text-center section-contact">
					<div className="row" style={{ marginTop: 3 + "rem" }}>
						<div className="col col-xs-12 col-sm-12 col-md-6 col-lg-6">
							<form action="https://formspree.io/martinez1751@gmail.com" className="form" method="POST">
								<div className="form-title">
									<h4 className="pb-1">Get in Touch</h4>
								</div>

								<div className="form__group">
									<input
										type="text"
										className="form__input"
										placeholder="Your Name"
										id="name"
										requiered
									/>
									<label htmlFor="name" className="form_label">
										Your Name
									</label>
								</div>
								<div className="form__group">
									<input
										type="email"
										className="form__input"
										placeholder="Your Email"
										id="email"
										requiered
									/>
									<label htmlFor="email" className="form_label">
										Your Email
									</label>
								</div>
								<div className="form__group">
									<label htmlFor="message" className="form_label">
										Message
									</label>
									<textarea
										type="text"
										className="form__input"
										placeholder="Your Message"
										id="message"
										requiered
									/>
								</div>
								<Button
									color="primary"
									style={{
										fontSize: "1.6rem",
										marginBottom: "2rem"
									}}
									type="submit"
									value="Send">
									Submit
								</Button>
							</form>
						</div>
						<div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
							<GoogleMap />
						</div>
					</div>
				</div>
			</>
		);
	}
}
