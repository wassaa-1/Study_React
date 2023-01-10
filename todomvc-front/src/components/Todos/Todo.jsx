import React, { useState } from 'react'
import './Todo.css'

const Todo = props => {
    const [title, setTitle] = useState(props.name);
    const [isCompleted, setCompleted] = useState(false);

    // Todo 업데이트 핸들러
    const editTodoHandler = event => {
        setTitle(event.target.value);
    }

    //Todo 업데이트 적용 핸들러
    const updateSubmitHandler = (event) => {
        if (event.key === 'Enter') {
            props.onUpdate(props.id, title);
            event.target.disabled = true;
        }
    }

    // Todo 체크 시 삭선효과, 회색 텍스트 적용
    const checkHandler = () => {
        setCompleted(!isCompleted);
    }


    // Todo 편집 활성화 핸들러
    const editableHandler = event => {
        event.target.disabled = false;
    }

    // input이 포커싱을 잃으면 다시 비활성화(disabled)해주는 핸들러
    const UneditableHandler = event => {
        event.target.disabled = true;
    }

    // Todo 딜리트 핸들러
    const deleteTodoHandler = () => {
        props.onDelete(props.id);
    }

    return (
        <div>
            <li className='flex p-4'>
                <div className='flex w-full group'>
                    <input type="checkbox" onClick={checkHandler} className='check w-12 h-10' />
                    <div className='w-full' onDoubleClick={editableHandler}>
                        <input
                            type="text"
                            value={title}
                            className={`inp h-full w-full bg-transparent ${isCompleted && 'line-through text-gray-400 ease-in duration-100'}`}
                            onChange={editTodoHandler}
                            onBlur={UneditableHandler}
                            onKeyDown={updateSubmitHandler}
                            disabled
                        />
                        <label htmlFor={props.id}></label>
                    </div>
                    <button className='invisible group-hover:visible text-red-300 font-semibold cursor-default' onClick={deleteTodoHandler}>X</button>
                </div>
            </li>
        </div>
    )
}

export default Todo