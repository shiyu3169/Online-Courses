import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'
import CourseList from './containers/courses/CourseList'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseEditor from "./containers/courses/CourseEditor";

const ModuleListItemStateLess = ({title}) => 
		<li className="list-group-item">
			{title} (Stateless)
			<span className="float-right">
				<i style={{"marginRight":"5px"}} className="fa fa-trash"></i>
				<i className="fa fa-pencil"></i>
			</span>
		</li>

// class ModuleItem extends React.Component {
// 	render() {
// 		return (
// 			<li className="list-group-item">
// 				{this.props.title}
// 				<span className="float-right">
// 					<i style={{"marginRight":"5px"}} className="fa fa-trash"></i>
// 					<i className="fa fa-pencil"></i>
// 				</span>
// 			</li>
// 		)
// 	}
// }



class CourseCard extends React.Component {
	render() {
		return (
			<div className="card" style={{"width": "18rem"}}>
				<img className="car-img-top" alt="random img" src="https://picsum.photos/300/200"/>
			  	<div className="card-body">
				    <h5 className="card-title">Card title</h5>
				    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				    <a href="" className="card-link">Card link</a>
				    <a href="" className="card-link">Another link</a>
			  	</div>
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return(
			<Router>
				<div>
					<Link to="/whiteboard">White</Link>
					<Route path="/whiteboard" component={WhiteBoard} />
                    <Route path="/course/:courseId" component={CourseEditor}/>
				</div>
			</Router>
		);
	}
}

class WhiteBoard extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h1>Whiteboard</h1>
				<CourseList/>
			</div>
		)
	}
}

ReactDOM.render(
    <App/>,
	document.getElementById("root")
);