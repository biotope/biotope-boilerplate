import React from "react";
import ReactDOM from "react-dom";
import Hello from "./demo/Hello";

$.fn.tsxDemo = function() {
	ReactDOM.render(
		<Hello name="Jeff Albertson" />,
		this.get(0)
	);
};
