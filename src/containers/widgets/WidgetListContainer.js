import { connect } from 'react-redux'
import WidgetListComponent from './WidgetListComponent'

const stateToPropertyMapper = state => (
    {
        widgets: state.widgets
    }
)

const dispatcherToPropertyMapper = dispatch => (
    {
        deleteWidget: (wid) => dispatch({
            type: "DELETE_WIDGET",
            widgetId: wid
        }),
        createWidget: (widget) => dispatch({
            type: "CREATE_WIDGET",
            widget: widget
        }),
        updateWidget: w => dispatch({
            type: "UPDATE_WIDGET",
            widget: w
        }),
        saveWidgets: () => dispatch({
            type: "SAVE_WIDGETS"
        }),
        loadAllWidgets: () => {
            fetch("http://localhost:8080/api/widget").then(
                response => response.json()
            ).then(
                widgets=> dispatch({
                    type: 'FIND_ALL_WIDGETS',
                    widgets: widgets
                })
            )
        }
    }
)

const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent)

export default WidgetListContainer