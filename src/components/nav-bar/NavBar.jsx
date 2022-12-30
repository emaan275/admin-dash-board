import React from 'react'
import './NavBar.css'
import { NotificationsNone  , Language, Settings} from "@material-ui/icons";
import Avatar from '../../images/avatar.svg'


function NavBar ()  {
    return (
        <div className="topbar">
              <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo">EmanAdmin</span>

                         </div>
                    <div className="topRight">
                        <div className="topbarIconContainer">
                            <NotificationsNone/>
                             <span className="topIconBadge">2</span>

                        </div>
                        <div className="topbarIconContainer">
                            < Language />
                             <span className="topIconBadge">2</span>

                        </div>
                        <div className="topbarIconContainer">
                            < Settings />
                        </div>
                        <img src={Avatar}  alt="" className="topAvatar" />
                         </div>
              </div>
          
        </div>
    )
}

export default NavBar
