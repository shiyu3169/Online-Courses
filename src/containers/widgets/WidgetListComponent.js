import React from 'react'

 const WidgetListComponent = ({widgets, deleteWidget, createWidget}) => {
    let widgetTitle; 
    return (
        <div>
            <h1>Widget List ({widgets.length})</h1>
            <ul className="List-group">
                <li className="list-group-item">
                    <input className="form-control" ref={(node) => {widgetTitle = node}}/>
                    <button className="btn btn-success" 
                    onClick={
                        () => {
                            let widget = {
                                title: widgetTitle.value, 
                                id: (new Date()).getTime()
                            };
                            widgetTitle.value = ''
                            createWidget(widget)
                        }
                        }>Add widget</button>
                </li>
                {widgets.map((widget,index)=>
                    <li className="list-group-item" key={index}>{widget.title} ({widget.id})
                        <button className="btn btn-danger float-right" 
                        onClick={() => deleteWidget(widget.id)}>Delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
 }

export default WidgetListComponent