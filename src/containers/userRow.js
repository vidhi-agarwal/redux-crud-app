import React from 'react';

const userRow = (props) => {
	return (
		<tr>
			<td>{props.id}</td>
			<td>{props.name}</td>
			<td>{props.email}</td>
			<td
				button
				type='button'
				class='btn btn-primary'
				onClick={() => {
					props.editHandle();
				}}>
				Edit
			</td>
			<td
				button
				type='button'
				class='btn btn-danger'
				onClick={() => {
					if (window.confirm('Are you sure you wish to delete this item?')) {
						props.deleteHandle(props.id);
					}
				}}>
				Delete
			</td>
		</tr>
	);
};
export default userRow;
