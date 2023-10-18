import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import SelectAllOutlinedIcon from '@mui/icons-material/SelectAllOutlined';
import TokenIcon from '@mui/icons-material/Token';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ThreePIcon from '@mui/icons-material/ThreeP';
import Brightness7OutlinedIcon from '@mui/icons-material/Brightness7Outlined';
import Content from './Content';
import Face6OutlinedIcon from '@mui/icons-material/Face6Outlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


const Sidebar = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <div className="logo"><TokenOutlinedIcon /></div>
                    Dashboard
                </div>
                <div className="list">
                    <div className="name">
                        <a class="active"  href="#home"><SelectAllOutlinedIcon />  Dashboard</a></div>
                </div>

                <div className="list">
                    <div className="name">
                        <a href="#home"><TokenIcon />  Product</a></div>
                    <div className="lasticonone"><KeyboardArrowRightIcon /></div>
                </div>

                <div className="list">
                    <div className="name">
                        <a href="#home"><AccountBoxOutlinedIcon />  Customers</a></div>
                    <div className="lasticontwo"><KeyboardArrowRightIcon /></div>
                </div>

                <div className="list">
                    <div className="name">
                        <a href="#home"><AccountBalanceWalletOutlinedIcon />  Income</a></div>
                    <div className="lasticonthree"><KeyboardArrowRightIcon /></div>
                </div>

                <div className="list">
                    <div className="name">
                        <a href="#home"><Brightness7OutlinedIcon />  Promote</a></div>
                    <div className="lasticonfour"><KeyboardArrowRightIcon /></div>
                </div>

                <div className="list">
                    <div className="name">
                        <a href="#home"><ThreePIcon />  Help</a></div>
                    <div className="lasticonfive"><KeyboardArrowRightIcon /></div>
                </div>
                <div className="lastelement">
                    <div className="lastelementid">
                        <Face6OutlinedIcon />
                    </div>
                    <div className="lastelementname">
                        Evano<br></br>
                        ProjectManager
                    </div>
                    <div className="lastelementsign">
                        <KeyboardArrowDownOutlinedIcon />
                    </div>
                </div>
            </div>
            <Content />
        </div>
    );
};

export default Sidebar;