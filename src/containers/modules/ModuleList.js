import React from "react";
import LessonTabs from "../lessons/LessonTabs";

export default class ModuleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedModuleIndex: 0
        }
    }
    // Change state of the select module
    selectModule = (i) => {
        this.setState({
            selectedModuleIndex: i
        })
    }

    // titleChanged = (e) => {
    //     // console.log(e.target.value);
    //     this.setState({title: e.target.value});
    // }
    //
    // createModule = () => {
    //     const module = {title: this.state.title};
    //     this.state.modules.push(module);
    //     this.setState({modules: this.state.modules});
    // }

    // renderModuleList() {
    //     let modules =
    //         this.state.modules.map(
    //             (module, i) => <ModuleListItemStateLess key={i} title={module.title} />
    //         )
    //     return modules;
    // }

    render() {

        return (
            <div>
                <h3>Module List</h3>
                {/*<h2>{this.state.title}</h2>*/}
                {/*<input className="form-control" placeholder="title" onChange={this.titleChanged}/>*/}
                {/*<button onClick={this.createModule} className="btn btn-primary btn-block">Add Module</button>*/}
                <ul className="list-group">
                    {this.props.course.modules.map((module, i) => {
                        return <li onClick={() => this.selectModule(i)} className="list-group-item" key={i}>{module.title}</li>
                    })}
                </ul>
                <LessonTabs module={this.props.course.modules[this.state.selectedModuleIndex]}/>
            </div>
        )
    }
}