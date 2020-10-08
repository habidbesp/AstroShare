import React from "react";

export default function FindBar(props) {
	function handleChange(event) {
		let newValue = event.target.value;
		props.handleQuery(newValue);
	}

	return (
		<div class='searchbar'>
			<input
				type='text'
				name='query'
				placeholder='Search'
				value={props.query}
				onChange={handleChange}
			/>
		</div>
	);
}
