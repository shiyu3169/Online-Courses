import React from 'react'

export const WidgetType2 = ({widget, updateWidget}) => {
    let widgetType;
    return (
        <div>
            <h3>Widget Type 2 - {widget.title} - {widget.widgetType}</h3>
            <select onChange={
                () => {
                    let w = {
                        id: widget.id,
                        widgetType: widgetType.value
                    };
                    updateWidget(w);
                }
                } className="form-control" ref={(node) => {widgetType = node}}>
                <option value="WT1">Widget Type 1</option>
                <option value="WT2">Widget Type 2</option>
                <option value="WT3">Widget Type 3</option>
            </select>
        </div>
    )
}