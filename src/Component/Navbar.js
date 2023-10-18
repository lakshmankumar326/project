import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="leftside">
                <p><h3>Hello Shahrukh👋,</h3></p>
            </div>
            <div className="rightside">
                <SearchOutlinedIcon />
                <input className="search"
                    placeholder="Search"
                />
            </div>
        </div>
    )
}

export default Navbar