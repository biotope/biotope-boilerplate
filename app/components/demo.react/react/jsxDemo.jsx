import * as ReactDOM from "react-dom";
import User from './demo/User';

$.fn.jsxDemo = function() {
	var data = { name: 'Jeff Albertson', city: 'Springfield' };
	ReactDOM.render(
		<User user={data} />,
		this.get(0)
	);
};


