import * as React from "react";
import UserName from './UserName';

export default class User extends React.Component {
	render() {
		return <div>
			<h1>Ort: {this.props.user.city}</h1>
			<UserName name={this.props.user.name} />
		</div>;
	}
}
