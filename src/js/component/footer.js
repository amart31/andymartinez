import React, { Component } from "react";
const date = new Date();
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			Made with <i className="fa fa-heart fa-2x text-danger" /> by{" "}
			<a target="_blank" rel="noopener noreferrer" href="https://github.com/amart31">
				Andy Martinez
			</a>
		</p>
		<span>&#169; {date.getFullYear()}</span>
	</footer>
);
