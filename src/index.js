import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'

const ModuleListItemStateLess = ({title}) => 
		<li className="list-group-item">
			{title} (Stateless)
			<span className="float-right">
				<i style={{"marginRight":"5px"}} className="fa fa-trash"></i>
				<i className="fa fa-pencil"></i>
			</span>
		</li>

class ModuleItem extends React.Component {
	render() {
		return (
			<li className="list-group-item">
				{this.props.title}
				<span className="float-right">
					<i style={{"marginRight":"5px"}} className="fa fa-trash"></i>
					<i className="fa fa-pencil"></i>
				</span>
			</li>
		)
	}
}

class ModuleList extends React.Component {

	constructor() {
		super();
		this.state = {
			modules: [
				{title: "Module 1"},
				{title: "Module 2"},
				{title: "Module 3"},
				{title: "Module 4"}
			]
		}
	}

	render() {
		return (
			<div>
				<h1>Module List</h1>
				<ul className="list-group">
					{
						this.state.modules.map(
							(module, i) => <ModuleListItemStateLess key={i} title={module.title} />
						)
					}
				</ul>
			</div>
		)
	}
}

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

class WhiteBoard extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<h1>Whiteboard</h1>
				<TopicPills/>
				<LessonTabs/>
				<ModuleList/>
				<div className="card-deck">
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<WhiteBoard/>,
	document.getElementById("root")
);