import React from 'react'
import Todos from '../../Todos/Todos'

const CardBody = props => {
    return (
        <div>
            {/* Todos */}
            <Todos todos={props.todos}
                onDelete={props.onDelete}
                onUpdate={props.onUpdate} />
        </div>
    )
}

export default CardBody