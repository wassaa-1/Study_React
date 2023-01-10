import React from 'react'

const CardFooter = () => {
    return (
        <div className='flex justify-between p-2'>
            <span>{'2 item left'}</span>

            <button>Clear completed</button>
        </div>
    )
}

export default CardFooter