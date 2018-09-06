let initialState = {
    widgets: [
        {title: 'Widget 1', id: 123, widgetType: 'WT1'},
        {title: 'Widget 2', id: 234, widgetType: 'WT2'},
        {title: 'Widget 3', id: 345, widgetType: 'WT3'},
        {title: 'Widget 4', id: 456, widgetType: 'WT1'}
    ]
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
        default:
            return state
    }
    
}