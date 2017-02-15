import User from './hello/User';

$.fn.reactify = function() {
	var data = { name: 'John Doe', city: 'San Francisco' };
	ReactDOM.render(
		<User user={data} />,
		this.get(0)
	);
};


