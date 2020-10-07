import React from "react";

export default function FindBar(props) {
	function handleChange(event) {
		// console.log(event.target.value, 'VALUE');
		let newValue = event.target.value;
		props.handleQuery(newValue);
	}

	return (
		<div>
			<input type='text' name='query' value={props.query} onChange={handleChange} />
		</div>
	);
}
