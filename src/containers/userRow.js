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
				class='btn btn-primary mr-3 '
				onClick={() =>
					props.editHandle(props.id, 'NAME ENTERED HERE', 'EMAIL ENTERED HERE')
				}>
				Edit
			</td>
			<td
				button
				type='button'
				class='btn btn-danger'
				onClick={() => props.deleteHandle(props.id)}>
				Delete
			</td>
		</tr>
	);
};
export default userRow;
