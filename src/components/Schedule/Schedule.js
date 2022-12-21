import React from 'react';


const Schedule = ({info}) => {
    const { event } = info;
    return (
        <div className='schedule-box'>
            <div className='schedule-title'>{event.title}</div>
        </div>
    );
};

export default Schedule;