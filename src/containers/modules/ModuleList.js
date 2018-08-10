import React from "react";

export default class ModuleList extends React.Component {

    constructor() {
        super();
        this.state = {
            title: '',
            modules: [
                {title: "Module 1"},
                {title: "Module 2"},
                {title: "Module 3"},
                {title: "Module 4"}
            ]
        }
    }

    titleChanged = (e) => {
        // console.log(e.target.value);
        this.setState({title: e.target.value});
    }

    createModule = () => {
        const module = {title: this.state.title};
        this.state.modules.push(module);
        this.setState({modules: this.state.modules});
    }

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
                <h1>Module List</h1>
                <h2>{this.state.title}</h2>
                <input className="form-control" placeholder="title" onChange={this.titleChanged}/>
                <button onClick={this.createModule} className="btn btn-primary btn-block">Add Module</button>
                <ul className="list-group">
                    {
                        // this.renderModuleList()
                        <h1>123</h1>
                    }
                </ul>
            </div>
        )
    }
}