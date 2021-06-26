import React from 'react'

const onTheClick = () => {
    var element = document.body;
   element.classList.toggle("dark-mode");
}

const Nav = () => {
    return ( 
        <div className='toggler'>
            <label className="switch">
                <input type="checkbox"  onChange={onTheClick}/>
                <span class="slider round"></span>
            </label>
        </div>
     );
}
 
export default Nav;