import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { Context } from "../store/appContext.js";

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
	validateForm() {
		return this.state.name.length > 2 && this.state.message.length > 5;
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div
							className="container"
							style={{
								width: "400px"
							}}>
							<Form onSubmit={actions.handleFormSubmit}>
								<FormGroup>
									<Input
										style={{
											width: "300px",
											margin: "0 auto"
										}}
										type="text"
										name="name"
										ref={this.name}
										placeholder="Name"
										onChange={e =>
											this.setState({
												name: e.target.value
											})
										}
									/>
								</FormGroup>

								<FormGroup>
									<Input
										style={{
											width: "300px",
											margin: "0 auto"
										}}
										type="email"
										name="email"
										ref={this.email}
										placeholder="Email"
										onChange={e =>
											this.setState({
												email: e.target.value
											})
										}
									/>
								</FormGroup>
								<FormGroup>
									<Input
										style={{
											width: "300px",
											height: "100px",
											margin: "0 auto"
										}}
										type="textarea"
										name="message"
										ref={this.message}
										placeholder="Tell me something"
										onChange={e =>
											this.setState({
												message: e.target.value
											})
										}
									/>
								</FormGroup>
								<div className="text-center pb-2">
									<Button
										color="primary"
										disabled={!this.validateForm()}
										// 	onClick={() => {
										// 		this.setState({
										// 			session: actions.login(
										// 				this.state.user,
										// 				this.state.pass
										// 			)
										// 		});
										// 	}}
									>
										Submit
									</Button>
								</div>
							</Form>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
