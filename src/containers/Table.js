import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editUser, deleteUser, initUser } from '../store/users';
import UserRow from './userRow';
import Hoc from './hoc';
import Modal from './Modal';

class table extends Component {
	state = {
		modal: -1,
	};
	componentDidMount() {
		this.props.onInitUser();
	}

	handleUpdate(id, name, email) {
		this.props.onUserEdit(id, name, email);
	}

	render() {
		if (this.props.users) {
			return (
				<div>
					<div
						className='delete-button'
						onClick={() => {
							if (window.confirm('Are you sure you wish to delete this item?'))
								this.onCancel();
						}}
					/>
					<table className='table'>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
						</tr>
						{this.props.users.map((user) => {
							if (user) {
								return (
									<Hoc>
										<UserRow
											deleteHandle={(uid) => this.props.onUserDelete(uid)}
											editHandle={() => {
												this.setState({ modal: user.id });
											}}
											id={user.id}
											name={user.name}
											email={user.email}></UserRow>
										{this.state.modal === user.id ? (
											<Modal
												name={user.name}
												email={user.email}
												closed={() => {
													this.setState({ modal: -1 });
												}}
												saveModalDetails={(item) => {
													this.setState({ modal: -1 });
													this.handleUpdate(user.id, item.name, item.email);
												}}
											/>
										) : null}
									</Hoc>
								);
							}
							return null;
						})}
					</table>
				</div>
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
