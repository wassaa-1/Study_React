import React from 'react'

// 합성의 방법 2가지
// 1. Containment
// 2. Specialization
// Containment를 활용한 컴포넌트 합성
const Card = props => {
    return (
        <div className='w-3/5 m-4 shadow-md border-gray-300 bg-white'>
            {props.children}
        </div>
    )
}

export default Card