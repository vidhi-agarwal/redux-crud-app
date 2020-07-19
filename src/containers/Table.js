import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser, deleteUser, initUser } from '../store/users';
import UserRow from './userRow';

class table extends Component {
	componentDidMount() {
		this.props.onInitUser();
	}

	render() {
		if (this.props.users) {
			return (
				<table className='table'>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
					</tr>
					{this.props.users.map((user) => {
						if (user) {
							return (
								<UserRow
									deleteHandle={(uid) => this.props.onUserDelete(uid)}
									editHandle={(uid, uname, uemail) =>
										this.props.onUserEdit(uid, uname, uemail)
									}
									id={user.id}
									name={user.name}
									email={user.email}></UserRow>
							);
						}
						return null;
					})}
				</table>
			);
		} else {
			return <h1>Loading</h1>;
		}
	}
}

const mapStatetoProps = (state) => {
	return {
		...state,
		users: state.users,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		onUserEdit: (uid, uname, uemail) => dispatch(editUser(uid, uname, uemail)),
		onUserDelete: (uid) => dispatch(deleteUser(uid)),
		onInitUser: () => dispatch(initUser()),
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(table);
