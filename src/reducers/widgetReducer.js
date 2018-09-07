let initialState = {
    widgets: []
};

export const widgetReducer = (state = initialState, action) => {
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
        default:
            return state
    }
    
}