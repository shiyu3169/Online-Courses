let initialState = {
    widgets: []
};

export const widgetReducer = (state = initialState, action) => {

    let fromIndex, toIndex;

    switch(action.type) {
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(
                    widget=> widget.id !== action.widgetId
                )
            }
        case 'CREATE_WIDGET':
            return {
                widgets: [
                    action.widget,
                    ...state.widgets
                ]
            }
        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(
                    widget => {
                        if(widget.id === action.widget.id) {
                            return action.widget
                        } else {
                            return widget
                        }
                    }
                )
            }
        case "SAVE_WIDGETS":
            fetch('http://localhost:8080/api/widget', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(state.widgets)
            });
            return state;
        case "FIND_ALL_WIDGETS":
            console.log(action.widgets)
            return {
                widgets: action.widgets
            }
        case 'UP':
            console.log(action.widgetId + 'going up')
            fromIndex = state.widgets.findIndex((widget)=> widget.id === action.widgetId)
            toIndex = fromIndex--;
            state.widgets.splice(toIndex, 0, state.widgets.splice(fromIndex, 1)[0]);
            console.log(state.widgets);
            return {
                widgets: state.widgets
            }
        case 'DOWN':
            console.log(action.widgetId + 'going Down')
            return state;
        default:
            return state
    }
    
}