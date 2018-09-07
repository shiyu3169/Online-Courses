import React from 'react'
import { WidgetType1 } from './WidgetType1';
import { WidgetType2 } from './WidgetType2';
import { WidgetType3 } from './WidgetType3';
import { HeadingWidget } from './HeadingWidget';
import { ListWidget } from './ListWidget';
import { YouTubeWidget } from './YouTubeWidget';

 class WidgetListComponent extends React.Component {
     constructor(props) {
         super(props)
         let widgetTitle; 
         let widgetType;
         this.props.loadAllWidgets()
     }
     render() {
        return (
            <div>
                <button onClick={this.props.saveWidgets} className="btn btn-primary float-right">Save</button>
                <h1>Widget List ({this.props.widgets.length})</h1>
                <ul className="List-group">
                    <li className="list-group-item">
                        <input className="form-control" ref={(node) => {this.widgetTitle = node}}/>
                        <button className="btn btn-success" 
                                onClick={
                                    () => {
                                        let widget = {
                                            title: this.widgetTitle.value, 
                                            id: (new Date()).getTime(),
                                            widgetType: this.widgetType.value
                                        };
                                        this.widgetTitle.value = ''
                                        this.props.createWidget(widget)
                                    }}>
                            Add widget
                        </button>
                        <select className="form-control" ref={(node) => {this.widgetType = node}}>
                            <option value="WT1">Widget Type 1</option>
                            <option value="WT2">Widget Type 2</option>
                            <option value="WT3">Widget Type 3</option>
                            <option value="HEADING">Heading Widget</option>
                        </select>
                    </li>
                    {this.props.widgets.map((widget,index)=>
                        <li className="list-group-item" key={index}>
                            {widget.title} ({widget.id}) - {widget.widgetType}
                            <button className="btn btn-danger float-right" 
                                    onClick={() => this.props.deleteWidget(widget.id)}>
                                Delete
                            </button>
                            <div>
                                {widget.widgetType === 'YOUTUBE' && <YouTubeWidget widget={widget} updateWidget = {this.props.updateWidget}/>}
                                {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget = {this.props.updateWidget}/>}
                                {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget = {this.props.updateWidget} />}
                                {widget.widgetType === 'WT1' && <WidgetType1 widget={widget} updateWidget = {this.props.updateWidget} />}
                                {widget.widgetType === 'WT2' && <WidgetType2 widget={widget} updateWidget = {this.props.updateWidget} />}
                                {widget.widgetType === 'WT3' && <WidgetType3 widget={widget} updateWidget = {this.props.updateWidget} />}
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        )
     }
 } 

export default WidgetListComponent