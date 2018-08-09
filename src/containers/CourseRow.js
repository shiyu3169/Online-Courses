import React from 'react';

class CourseRow extends React.Component {
	render() {
		return (
			<tr>
				<td>
					{this.props.course.title}
					<button onClick={() => this.props.deleteCourse(this.props.course.id)} className="btn btn-danger float-right">Delete</button>
				</td>
			</tr>
		)	
	}
}

export default CourseRow