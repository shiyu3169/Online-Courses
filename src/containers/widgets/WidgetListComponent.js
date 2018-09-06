import React from 'react'

 const WidgetListComponent = ({widgets, deleteWidget}) => 
    <div>
        <h1>Widget List ({widgets.length})</h1>
        <ul className="List-group">
            {widgets.map((widget,index)=>
                <li className="list-group-item" key={index}>{widget.title} ({widget.id})
                    <button className="btn btn-danger float-right" 
                    onClick={() => deleteWidget(widget.id)}>Delete</button>
                </li>
                
            )}
        </ul>
    </div>

export default WidgetListComponent