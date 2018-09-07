import React from 'react'
import { WidgetType1 } from './WidgetType1';
import { WidgetType2 } from './WidgetType2';
import { WidgetType3 } from './WidgetType3';
import { HeadingWidget } from './HeadingWidget';
import { ListWidget } from './ListWidget';
import { YouTubeWidget } from './YouTubeWidget';

 const WidgetListComponent = ({widgets, deleteWidget, createWidget, updateWidget, saveWidgets}) => {
    let widgetTitle; 
    let widgetType;
    return (
        <div>
            <button onClick={saveWidgets} className="btn btn-primary float-right">Save</button>
            <h1>Widget List ({widgets.length})</h1>
            <ul className="List-group">
                <li className="list-group-item">
                    <input className="form-control" ref={(node) => {widgetTitle = node}}/>
                    <button className="btn btn-success" 
                            onClick={
                                () => {
                                    let widget = {
                                        title: widgetTitle.value, 
                                        id: (new Date()).getTime(),
                                        widgetType: widgetType.value
                                    };
                                    widgetTitle.value = ''
                                    createWidget(widget)
                                }}>
                        Add widget
                    </button>
                    <select className="form-control" ref={(node) => {widgetType = node}}>
                        <option value="WT1">Widget Type 1</option>
                        <option value="WT2">Widget Type 2</option>
                        <option value="WT3">Widget Type 3</option>
                        <option value="HEADING">Heading Widget</option>
                    </select>
                </li>
                {widgets.map((widget,index)=>
                    <li className="list-group-item" key={index}>
                        {widget.title} ({widget.id}) - {widget.widgetType}
                        <button className="btn btn-danger float-right" 
                                onClick={() => deleteWidget(widget.id)}>
                            Delete
                        </button>
                        <div>
                            {widget.widgetType === 'YOUTUBE' && <YouTubeWidget widget={widget} updateWidget = {updateWidget}/>}
                            {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget = {updateWidget}/>}
                            {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget = {updateWidget} />}
                            {widget.widgetType === 'WT1' && <WidgetType1 widget={widget} updateWidget = {updateWidget} />}
                            {widget.widgetType === 'WT2' && <WidgetType2 widget={widget} updateWidget = {updateWidget} />}
                            {widget.widgetType === 'WT3' && <WidgetType3 widget={widget} updateWidget = {updateWidget} />}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
 }

export default WidgetListComponent