import React from "react";
import { Button } from "reactstrap";
import { Title } from "./title";

export const Contact = () => {
	return (
		<>
			<Title title="contact" />

			<div className="container-fluid section-contact">
				<div className="row" style={{ marginTop: 3 + "rem" }}>
					<div className="col text-center">
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
									requiered="true"
								/>
							</div>
							<div className="form__group">
								<input
									type="email"
									className="form__input"
									placeholder="Your Email"
									id="email"
									requiered="true"
								/>
							</div>
							<div className="form__group">
								<textarea
									type="text"
									className="form__input"
									placeholder="Say Hello"
									id="message"
									requiered="true"
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
				</div>
			</div>
		</>
	);
};
