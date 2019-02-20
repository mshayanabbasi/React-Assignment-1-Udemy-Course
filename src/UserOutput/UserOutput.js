import React from 'react'
import './Output.css'
const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>userName: {props.name}</p>
            <p>I will overwite this name</p>
        </div>
    )
}
export default userOutput