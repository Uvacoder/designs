import React from 'react';

const Scroll = (props) => {
    return ( 
        <div className='scroll' style={{overflowY: 'scroll', height: '30rem'}}>{props.children}</div>
     );
}
 
export default Scroll;