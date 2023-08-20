import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Nav.css';
import { GridOutline, HomeOutline, PersonOutline, RibbonOutline, MailOutline, EyeOutline, SunnyOutline, MoonOutline, Home } from 'react-ionicons';


function Navbar() {
    const [isToggled, setToggled] = useState(true);

    let ListMenu = [<HomeOutline title={'Home'} color='#fff'></HomeOutline>, <PersonOutline title={'About'} color='#fff'></PersonOutline>, <RibbonOutline title={'Projects'} color='#fff'></RibbonOutline>, <MailOutline title={'Contact'} color='#fff'></MailOutline>, <EyeOutline title={'Resume'} color='#fff'></EyeOutline>];
    let pathList = ['/', '/about', '/portfolio', '/contact', '/resume']
    let ListItems;
    if (isToggled) {
        ListItems = <div className='Nav'>
            {ListMenu.map((item, id) =>
                <ul key={id}>
                    <li key={id} className={`item_${id}`}><NavLink to={pathList[id]}>{item}</NavLink></li>
                </ul>)}
        </div>

    } else {
        ListItems = null;
    }
    return (
        <React.Fragment>
            <div className="NavBar">
                <div className="NavLocation">
                    {ListItems}
                </div>
                <div className="Button">
                    <div className='container'>
                        <GridOutline className='MenuBar' color='#fff' onClick={() => { setToggled(!isToggled) }}>Click</GridOutline>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;