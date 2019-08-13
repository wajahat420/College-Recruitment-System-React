import React from 'react'

import "./toggle_button.css"

export default function toggle_button(props) {
	return (
		<div onClick={props.click} className="toggle_button">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
