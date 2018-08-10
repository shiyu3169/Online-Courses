import React from 'react'
import TopicPills from "../topics/TopicPills";

class LessonTabs extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            selectedLessonIndex: 0
        }
    }

    selectLesson = (i) => {
        this.setState({
            selectedLessonIndex: i
        })
    }

	render() {
		return (
			<div>
				<h4>Lesson Tabs {this.props.module.lessons.length}</h4>
				<ul className="nav nav-tabs">
                    {this.props.module.lessons.map((lesson, i) => {
                            return (
                                <li className="nav-item" key={i}>
                                    <span onClick={()=> this.selectLesson(i)} className="nav-link active" >{lesson.title}</span>
                                </li>
                            )
                    })}
				</ul>
                <TopicPills lesson={this.props.module.lessons[this.state.selectedLessonIndex]}/>
			</div>
		)
	}
}

export default LessonTabs