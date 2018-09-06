import React from 'react'

export const ListWidget = ({widget, updateWidget}) => {
    let text;
    return (
        <div>
            <h3>List Widget</h3>
            <textarea onChange={
                () => {
                    widget.listItems = text.value
                    updateWidget(widget)
                }
            } ref={node => text = node} className="form-control" defaultValue={widget.listItems}></textarea>
            <h4>Preview</h4>
            <ul>
                {widget.listItems.split('\n').map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}