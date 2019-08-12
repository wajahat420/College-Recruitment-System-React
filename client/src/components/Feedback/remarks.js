import React from 'react'

export default function remarks(props) {
	return (
		<table className="text-center col-12 m-auto">
			<tbody>

			<tr>
				<td></td>
				<td>1</td>
				<td>2</td>
				<td>3</td>
				<td>4</td>
				<td>5</td>
				<td>6</td>
				<td>7</td>
				<td>8</td>
				<td>9</td>
				<td>10</td>
				<td></td>
			</tr>
			<tr>
				<td>{props.left}</td>
				<td><input onClick={()=>props.value(1)} name={props.name} type="radio"/></td>
				<td><input onClick={()=>props.value(2)} name={props.name} type="radio"/></td>
				<td><input onClick={()=>props.value(3)} name={props.name} type="radio"/></td>
				<td><input onClick={()=>props.value(4)} name={props.name} type="radio"/></td>
				<td><input onClick={()=>props.value(5)} name={props.name} type="radio"/></td>
				<td><input onClick={()=>props.value(6)} name={props.name} type="radio"/></td>
				<td><input onClick={()=>props.value(7)} name={props.name} type="radio"/></td>
				<td><input onClick={()=>props.value(8)} name={props.name} type="radio"/></td>
				<td><input onClick={()=>props.value(9)} name={props.name} type="radio"/></td>
				<td><input onClick={()=>props.value(10)} name={props.name} type="radio"/></td>
				<td>{props.right}</td>
			</tr>
			</tbody>
		</table>
	)
}
