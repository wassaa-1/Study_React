import React from 'react'

const CardHeader = props => {
    const enterKey = event => {
        const enteredValue = event.target.value;

        if (event.key === 'Enter') {
            props.onAdd(enteredValue);
            event.target.value = '';
        }
    }

    return (
        <div>
            <input type="text"
                className='w-full h-14 p-2 outline-none text-2xl placeholder:italic
                         placeholder:text-gray-300 placeholder:text-xl'
                placeholder='What needs to be done?'
                onKeyDown={enterKey}
            />
        </div>
    )
}

export default CardHeader