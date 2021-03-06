import React from 'react'

export const HeadingWidget = ({widget, updateWidget}) => {
    let text, size;
    return(
        <div>
            <h3>Heading Widget</h3>
            <label htmlFor="text">Heading Text</label>
            <input onChange={() => {
                widget.text = text.value
                updateWidget(widget)
            }} ref={(node) => text = node} id="text" className="form-control" placeholder="Heading Text"/>
            <label htmlFor="size">Heading Size</label>
            <select onChange = {
                () => {
                    widget.size = parseInt(size.value);
                    updateWidget(widget)
                }
            } ref={(node) => size = node} className="form-control" id="size">
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
                <option value="4">Heading 4</option>
            </select>
            <h4>Preview</h4>
            {widget.size === "1" && <h1>{widget.text}</h1>}
            {widget.size === "2" && <h2>{widget.text}</h2>}
            {widget.size === "3" && <h3>{widget.text}</h3>}
            {widget.size === "4" && <h4>{widget.text}</h4>}
        </div>
    )
}