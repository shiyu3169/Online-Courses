import React from 'react';
import { Link } from 'react-router-dom';

class CourseRow extends React.Component {
	render() {
		return (
			<tr>
				<td>
                    <Link to= {`/course/${this.props.course.id}`}>
                        {this.props.course.title}
                </Link>
				</td>
                <td>
                    <button onClick={() => this.props.deleteCourse(this.props.course.id)} className="btn btn-danger float-right">Delete</button>
                </td>
			</tr>
		)
	}
}

export default CourseRow