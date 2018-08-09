import React from 'react';

class CourseRow extends React.Component {
	render() {
		return (
			<tr>
				<td>
					{this.props.course.title}
				</td>
			</tr>
		)	
	}
}

export default CourseRow