import React from 'react'

class TopicPills extends React.Component {
  render(){
    return (
        <div>
            <ul className="nav nav-pills">
                {this.props.lesson.topics.map(
                    (lesson, i) => {
                        return(
                            <li key={i} className="nav-item">
                                <span className="nav-link">{lesson.title}</span>
                            </li>
                        )
                    }
                )}

            </ul>
        </div>
      )
  }
}

export default TopicPills