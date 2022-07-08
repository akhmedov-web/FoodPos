import React from 'react';


const Case = (props) => {
    return (
        <div className='case'>
            <img className='salat' style={{width:"50%"}} src={props.img} />
            <h5 style={{ padding:'5px'}}>{props.children}</h5>
        </div>
    );
};

export default Case;