import React from 'react'
import '../App.css'
import Navbar from './Navbar'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

function Content() {
    return (
        <div class="content">
            <Navbar />
            <div className="firstrow">
                <div className="firstbox">
                    <div className="firstrowleftside">
                        <div className="firstboxlogoone">
                            <MonetizationOnOutlinedIcon />
                        </div>
                    </div>
                    <div className="firstrowrightside">
                        <div className="firstline">
                            Earning
                        </div>
                        <div className="secondline">
                            $198k
                        </div>
                        <div className="thirdlineone">
                            ↑ 37.8% this month
                        </div>
                    </div>
                </div>

                <div className="firstbox">
                    <div className="firstrowleftside">
                        <div className="firstboxlogotwo">
                            <ListAltOutlinedIcon />
                        </div>
                    </div>
                    <div className="firstrowrightside">
                        <div className="firstline">
                            Orders
                        </div>
                        <div className="secondline">
                            $2.4k
                        </div>
                        <div className="thirdline">
                            ↓ 2% this month
                        </div>
                    </div>
                </div>

                <div className="firstbox">
                    <div className="firstrowleftside">
                        <div className="firstboxlogothree">
                            <AccountBalanceWalletOutlinedIcon />
                        </div>
                    </div>
                    <div className="firstrowrightside">
                        <div className="firstline">
                            Balance
                        </div>
                        <div className="secondline">
                            $2.4k
                        </div>
                        <div className="thirdline">
                            ↓ 2% this month
                        </div>
                    </div>
                </div>

                <div className="firstbox">
                    <div className="firstrowleftside">
                        <div className="firstboxlogofour">
                            <ShoppingBagOutlinedIcon />
                        </div>
                    </div>
                    <div className="firstrowsecondside">
                        <div className="firstline">
                            Total Sales
                        </div>
                        <div className="secondline">
                            $89k
                        </div>
                        <div className="thirdlineone">
                            ↑ 11% this month
                        </div>
                    </div>
                </div>

            </div>

            <div className="secondrow">
                <div className="secondrowleftside">
                    Overview<br></br>
                    Monthly Earning
                </div>

                <div className="secondrowrightside">
                    Customers<br></br>
                    Customers that buy products
                </div>
            </div>

            <div className="thirdrow">
                Product Sell
            </div>
        </div>
    )
}

export default Content