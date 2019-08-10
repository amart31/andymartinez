import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";

import PropTypes from "prop-types";

class GoogleMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {}
		};
		this.onMarkerClick = this.onMarkerClick.bind(this);
		this.onMapClick = this.onMapClick.bind(this);
	}

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});
	};

	onMapClick = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};
	render() {
		const style = {
			width: "90%",
			height: "90%"
		};
		return (
			<Map
				style={style}
				google={this.props.google}
				onClick={this.onMapClick}
				zoom={14}
				initialCenter={{ lat: 25.77386, lng: -80.19498 }}>
				<Marker
					onClick={this.onMarkerClick}
					title={"Andy Martinez"}
					position={{ lat: 25.77386, lng: -80.19498 }}
					name={"Andy Martinez"}
				/>
				<InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
					<div>
						<h3>Andy Martinez</h3>
						<address>
							Lets Chat
							<br />
							786-470-7570
							<br />
							Miami, FL
						</address>
					</div>
				</InfoWindow>
			</Map>
		);
	}
}
GoogleMap.propTypes = {
	google: PropTypes.object
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyCGYZ5YWTqPvL_finwMzHyduzUO-ox8aiE"
})(GoogleMap);
