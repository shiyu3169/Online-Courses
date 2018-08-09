import React from 'react';
import CourseRow from './CourseRow';
import CourseService from '../services/CourseService';

class CourseList extends React.Component {
	constructor() {
		super();
		this.courseService = CourseService.instance;
		this.state = {
		    courses: [],
            newCourse: {}
		};
	}

	componentDidMount() {

	    this.courseService.findAllCourses().then(
	        courses => {
	            this.setState({courses: courses});
            }
        );
    }

    formChanged = (e) => {
	    const newCourse = {
	        title: e.target.value
        };
        this.setState({
            newCourse: newCourse
        })
    };

    createCourse = () => {
        // this.state.courses.push(this.state.newCourse);
        // this.setState({
        //     courses: this.state.courses
        // });
        this.courseService.createCourse(this.state.newCourse).then(
            () => {
                this.courseService.findAllCourses().then(
                    courses => {
                        this.setState({courses: courses});
                    }
                );
            }
        )
    };

    deleteCourse = (id) => {
        this.courseService.deleteCourse(id).then(
            () => {
                this.courseService.findAllCourses().then(
                    courses => {
                        this.setState({courses: courses});
                    }
                );
            }
        )
    };

	render() {
		return (
			<div>
				<h2>Course List</h2>
				<table className="table">
					<thead>
						<tr>
							<th>Title</th>
						</tr>
                        <tr>
                            <th><input onChange={this.formChanged} className="form-control"/></th>
                            <th><button className="btn btn-primary" onClick={this.createCourse}>Add</button></th>
                        </tr>
					</thead>
					<tbody>
                    {
                        this.state.courses.map((course, i) =>
                            <CourseRow key={i} course={course} deleteCourse={this.deleteCourse}/>
                        )
                    }
					</tbody>
				</table>
			</div>
		)
	}
}

export default CourseList;